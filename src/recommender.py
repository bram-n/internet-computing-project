from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import cosine_similarity
from fetch_data import get_user_data
from dotenv import load_dotenv
import pandas as pd
import json
import zipfile
import numpy as np
import time

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
    og_data = load_src_data() #load src data

    mod_tbl = pd.get_dummies(og_data.drop(columns = "id")) #get rid of id, because we are gonna call get_dummies later and don't want id to be a predictor

    index_id_tbl = og_data[["index", "id"]] #create a key-val pair for idx and id for re-mapping later

    liked_movies = get_liked_movies(user_id)
    # train_id = liked_movies +  get_other_movies(user_id)

    # print(liked_movies)

    disliked_movies = ["ill_see_you_in_my_dreams", "sometime_other_than_now", "1001294-asylum", "good_boys_2019"] #for the purpose of testing, delete later
    train_id = liked_movies + disliked_movies

    og_data["liked"] = og_data["id"].isin(liked_movies).astype(int)
    train_id_idx = index_id_tbl[index_id_tbl["id"].isin(train_id)]["index"]
    train_data = mod_tbl[mod_tbl["index"].isin(train_id_idx)]
    test_data = mod_tbl[~mod_tbl["index"].isin(train_id_idx)]

    X_train = pd.get_dummies(train_data.drop(columns = "liked"))
    X_test = pd.get_dummies(test_data.drop(columns = "liked"))
    y_train = train_data["liked"]


    def run_SVM():

        scaler = StandardScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        X_test_scaled = scaler.transform(X_test)
        svm_model = SVC(kernel='linear')
        svm_model.fit(X_train_scaled,y_train)

        predictions = svm_model.predict(X_test_scaled)

        decision_values = svm_model.decision_function(X_test_scaled)
        decision_values

        return decision_values, predictions
    
    decision_values = run_SVM()[0]


    def run_cos_sim():
        liked_movies = train_data[train_data["liked"] == 1]  
        cos_sim_scores = cosine_similarity(test_data.drop(columns="liked"), liked_movies.drop(columns="liked")).mean(axis=1) 
        return cos_sim_scores
    
    cos_sim_scores = run_cos_sim()

    final_ranking = decision_values * cos_sim_scores


    pred_tbl =  pd.DataFrame({"idx" : X_test["index"],
                              "id": og_data[og_data["index"].isin(X_test["index"])]["id"],
                              "preds": run_SVM()[1],
                              "scores": final_ranking
                          })
    
    liked_ranking = pred_tbl[pred_tbl["preds"] == 1]
    
    top_10 = liked_ranking.nlargest(10, "scores")

    print("Finished running without any error")
    
    return top_10.to_json("src/data/test_preds_py.json", orient="records", indent=4)



start_time = time.time()  

user_id = '2e9ed51b-3e10-4f7d-8752-fd8f5bf80489' 
run_model(user_id)


end_time = time.time()  

print(f"Runtime: {end_time - start_time:.4f} seconds")


    

