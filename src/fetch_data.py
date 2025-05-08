import os
import json
import pandas as pd
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

def get_user_data(user_id):
    url: str = os.environ.get("SUPABASE_URL")
    key: str = os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")
    supabase: Client = create_client(url, key)

    # user_id = '2e9ed51b-3e10-4f7d-8752-fd8f5bf80489' #to be replace with the id of current user

    response = (supabase.table("movie_likes")
                .select('movie_id')
                .eq('user_id', user_id)
                .execute()
        )

    liked_movies = [movie["movie_id"] for movie in response.data]

    user_data = { "user_id": '2e9ed51b-3e10-4f7d-8752-fd8f5bf80489',
                "liked_movies": liked_movies}

    # try:
    #     with open("data/output.json", 'w') as f:
    #         json.dump(user_data, f, indent=4)  # Use indent=4 for pretty formatting
    # except Exception as e:
    #         print(f"Error writing JSON to file: {e}")
    return user_data
