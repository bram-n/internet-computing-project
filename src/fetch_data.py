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


    response = (supabase.table("movie_likes")
                .select('movie_id')
                .eq('user_id', user_id)
                .execute()
        )

    liked_movies = [movie["movie_id"] for movie in response.data]

    user_data = { "user_id": user_id,
                "liked_movies": liked_movies}

    return user_data
