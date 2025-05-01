import os
from supabase import create_client, Client
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")
supabase: Client = create_client(url, key)

user_id = '2e9ed51b-3e10-4f7d-8752-fd8f5bf80489'

response = (supabase.table("movie_likes")
            .select('movie_id')
            .eq('user_id', user_id)
            .execute()
    )

print(response)