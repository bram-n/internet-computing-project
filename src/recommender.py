from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import cosine_similarity
from fetch_data import get_user_data
from dotenv import load_dotenv
import pandas as pd
import json
import numpy as np
import os
from supabase import create_client, Client
import sys 

load_dotenv()

def get_liked_movies(user_id):
    return get_user_data(user_id)["liked_movies"]

def get_other_movies(user_id):
    return get_user_data(user_id)["other_movies"]

def get_user_id(user_id):
    return get_user_data(user_id)["user_id"]

def load_src_data():
    return pd.read_csv('src/final_data.csv').reset_index()

# def get_train_id():
#     return 


def run_model(user_id):
    og_data = load_src_data()

    liked_movies_ids = get_liked_movies(user_id)
    
    hardcoded_disliked_movies = ["ill_see_you_in_my_dreams", "sometime_other_than_now", "1001294-asylum", "good_boys_2019"] # For testing
    train_movie_ids = list(set(liked_movies_ids + hardcoded_disliked_movies))

    if not train_movie_ids:
        print("No liked or disliked movies found for training. Exiting.")
        with open("src/data/test_preds_py.json", 'w') as f:
            json.dump([], f)
        return

    og_data["liked"] = og_data["id"].isin(liked_movies_ids).astype(int)

    feature_columns = og_data.columns.drop(['id', 'index', 'liked'])
    
    features_to_dummy = og_data[feature_columns]
    X_all_dummied = pd.get_dummies(features_to_dummy, 
                                   columns=features_to_dummy.select_dtypes(include=['object', 'category']).columns, 
                                   dummy_na=False) 

    y_all = og_data["liked"]

    train_mask = og_data["id"].isin(train_movie_ids)
    test_mask = ~train_mask

    X_train = X_all_dummied[train_mask]
    y_train = y_all[train_mask]
    X_test = X_all_dummied[test_mask]

    test_set_indices = og_data.loc[test_mask, "index"]
    test_set_ids = og_data.loc[test_mask, "id"]

    if X_train.empty or X_test.empty:
        print("Training or testing set is empty after filtering. Cannot proceed.")
        with open("src/data/test_preds_py.json", 'w') as f:
            json.dump([], f)
        return

    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)
    
    svm_model = SVC(kernel='linear', probability=False) 
    svm_model.fit(X_train_scaled, y_train)

    svm_predictions = svm_model.predict(X_test_scaled)
    svm_decision_values = svm_model.decision_function(X_test_scaled)

    #Cosine Similarity
    liked_train_features = X_train[y_train == 1]

    if liked_train_features.empty:
        print("No liked movies in the training set to calculate cosine similarity. Scores will be 0.")
        cos_sim_scores = np.zeros(len(X_test))
    else:
        cos_sim_scores = cosine_similarity(X_test, liked_train_features).mean(axis=1)
    
    #final rank
    if len(svm_decision_values) == len(cos_sim_scores):
        final_ranking_scores = svm_decision_values * cos_sim_scores
    else:
        print("Mismatch in lengths of SVM decision values and cosine similarity scores. Defaulting final scores to 0.")
        final_ranking_scores = np.zeros(len(X_test))


    #p
    pred_tbl = pd.DataFrame({
        "original_index": test_set_indices.values, 
        "id": test_set_ids.values, 
        "svm_prediction": svm_predictions,
        "combined_score": final_ranking_scores
    })
    
    #gets top 10 recs
    liked_predictions_ranked = pred_tbl[pred_tbl["svm_prediction"] == 1]
    top_10_recommendations = liked_predictions_ranked.nlargest(10, "combined_score")

    #prep data
    simplified_output_df = pd.DataFrame()
    simplified_output_df['movie_id'] = top_10_recommendations['id']
    simplified_output_df['user_id'] = user_id

    print("Finished running model processing.")
    
 
    json_output_path = "src/data/test_preds_py.json"
    simplified_output_df.to_json(json_output_path, orient="records", indent=4)
    print(f"Recommendations saved to {json_output_path}")

    print(simplified_output_df) 
    #insert data into supabase
    try:
        supabase_url = os.environ.get("SUPABASE_URL")
        supabase_key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
        
        if not supabase_url or not supabase_key:
            print("Supabase URL or Key not found in environment variables. Skipping Supabase insert.")
            return 

        supabase: Client = create_client(supabase_url, supabase_key)
        table_name = "user_recommendations"

        print(f"Deleting existing recommendations for user_id: {user_id} from table '{table_name}'...")
        delete_data, delete_error = supabase.table(table_name).delete().eq("user_id", user_id).execute()

        if delete_error:
            print(f"Error deleting existing recommendations from Supabase: {delete_error}")
        else:
            print(f"Successfully deleted existing recommendations for user_id: {user_id}.")

        recommendations_to_insert = []
        for index, row in top_10_recommendations.iterrows():
            recommendations_to_insert.append({
                "user_id": user_id, 
                "movie_id": row["id"], 
                "recommendation_score": row["combined_score"]
            })
        
        if recommendations_to_insert:
            print(f"Inserting {len(recommendations_to_insert)} new recommendations for user_id: {user_id} into table '{table_name}'...")
            insert_data, insert_error = supabase.table(table_name).insert(recommendations_to_insert, returning="minimal").execute()
            if insert_error:
                print(f"Error inserting new recommendations into Supabase: {insert_error}")
            else:
                print(f"Successfully inserted {len(recommendations_to_insert)} new recommendations into Supabase table '{table_name}'.")
        else:
            print("No new recommendations to insert into Supabase.")

    except Exception as e:
        print(f"An error occurred during Supabase operation: {e}")

if __name__ == "__main__":
    user_id_from_arg = sys.argv[1] #api set up   
    run_model(user_id_from_arg)


    

