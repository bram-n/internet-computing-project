import { createClient } from '@/app/supabase/server';
import { Movie } from "./definitions";

const supabase = await createClient();

const fetchMovies = async (limit: number = 10): Promise<Movie[]> => {
	
	const { data: movies, error } = await supabase.from<any, Movie>('Movies').select().limit(limit);
	if (error) {
		console.error('Database error:', error);
		throw new Error("Error with querying movies");
	}
	return movies;
}

// just get popular movies for now
const fetchPopularMovies = async (limit: number = 4): Promise<Movie[]> => {

	const { data: movies, error } = await supabase.from<any, Movie>('Movies').select().limit(limit);
	if (error) {
		console.error('Database error:', error);
		throw new Error("Error with querying POPULAR movies");
	}
	return movies;
}


export { fetchMovies, fetchPopularMovies };

