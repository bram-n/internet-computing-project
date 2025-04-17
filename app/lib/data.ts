import { createClient } from '@/app/supabase/server';
import { Movie } from "./definitions";

export const fetchMovies = async (limit: number = 10): Promise<Movie[]> => {
	const supabase = await createClient();
	
	const { data: movies, error } = await supabase.from<any, Movie>('Movies').select().limit(limit);
	if (error) {
		console.error('Database error:', error);
		throw new Error("Error with querying movies");
	}
	return movies;
}
