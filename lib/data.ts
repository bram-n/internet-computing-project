import { createClient } from "@/app/supabase/server";
import { Movie, Genre} from "./definitions";

// Rewrite all of these to sort in order of most likely to be preffered by the user using Tam's algo

const fetchMovies = async (limit: number = 10): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: supabaseMovies, error } = await supabase
		.from("Movies")
		.select()
		.limit(limit);
	if (error) {
		console.error("Database error:", error);
		throw new Error("Error with querying movies");
	}
	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

	return movies;
};

const fetchMoviesByGenre = async (genreName: string, limit: number = 10): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: genre } = await supabase
		.from('unique_genres')
		.select('genre_id')
		.ilike('genre_name', genreName)
		.maybeSingle();
	
	if (!genre) return [];

	const { data: movieIds, error: movieIdsError } = await supabase
		.from('genres')
		.select('movie_id')
		.eq('genre_id', genre.genre_id)
		.limit(limit * 2);

	if (movieIdsError || !movieIds || movieIds.length === 0) return [];

	const ids = movieIds.map(item => item.movie_id);

	const { data: movies, error: moviesError } = await supabase
		.from('Movies')
		.select('*')
		.in('id', ids)
		.limit(limit);
	
	if (moviesError) return [];
	
	return movies || [];

};
  


// just get random movies for now
const fetchPopularMovies = async (limit: number = 5): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: supabaseMovies, error } = await supabase
		.from("Movies")
		.select()
		.limit(limit);
	if (error) {
		console.error("Database error:", error);
		throw new Error("Error with querying POPULAR movies");
	}

	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

	return movies;
};


const fetchAwardWinningMovies = async (limit: number = 3): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: supabaseMovies, error } = await supabase
		.from("Movies")
		.select()
		.limit(limit);
	if (error) {
		console.error("Database error:", error);
		throw new Error("Error with querying award winning movies");
	}

	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

	return movies;
};

// const fetchBoxOfficeHitsMovies = async (limit: number = 3): Promise<Movie[]> => {
// 	const supabase = await createClient();
// 	const { data: movieIds, error: movieIdsError } = await supabase
// 			.from('boxOffice')
// 			.select('movie_id')
// 			.eq('genre_id', genre.genre_id)
// 			.limit(limit * 2);

// 		if (movieIdsError || !movieIds || movieIds.length === 0) return [];


// 	const ids = movieIds.map(item => item.movie_id);

// 		const { data: movies, error: moviesError } = await supabase
// 			.from('Movies')
// 			.select('*')
// 			.in('id', ids)
// 			.limit(limit);

// 	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

// 	return movies;
// };


// just get random movies for now
const fetchFeaturedMovies = async (limit: number = 3): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: supabaseMovies, error } = await supabase
		.from("Movies")
		.select()
		.limit(limit);
	if (error) {
		console.error("Database error:", error);
		throw new Error("Error with querying POPULAR movies");
	}

	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

	return movies;
};

const fetchQuickMovies = async (limit: number = 12): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: supabaseMovies, error } = await supabase
		.from("Movies")
		.select("*")
		.lte("runtime_minutes", 90)
		.limit(limit);
	if (error) {
		console.error("Database error:", error);
		throw new Error("Error with querying quick movies");
	}

	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

	return movies;
};

const fetchLongMovies = async (limit: number = 12): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: supabaseMovies, error } = await supabase
		.from("Movies")
		.select("*")
		.gte("runtime_minutes", 120)
		.limit(limit);
	if (error) {
		console.error("Database error:", error);
		throw new Error("Error with querying quick movies");
	}

	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

	return movies;
};

const getMoviePosterImage = async (imdbId: string): Promise<string> => {
	try {
		if (!imdbId) {
			console.error("Missing IMDB ID");
			return '/placeholder-poster.jpg';
		}

		const apiKey = process.env.TMDB_API_KEY!;
		const response = await fetch(
			`https://api.themoviedb.org/3/find/${imdbId}?api_key=${apiKey}&external_source=imdb_id`
		);

		const data = await response.json();

		// Check if movie_results exists and has at least one entry
		if (!data.movie_results || data.movie_results.length === 0) {
			console.log(`No movie results found for IMDB ID: ${imdbId}`);
			return '/placeholder-poster.png';
		}

		// Safely access poster_path
		const posterPath = data.movie_results[0]?.poster_path;

		if (!posterPath) {
			console.log(`No poster path found for IMDB ID: ${imdbId}`);
			return '/placeholder-poster.png';
		}

		return `https://image.tmdb.org/t/p/w500${posterPath}`;
	} catch (error) {
		console.error(`Error fetching poster for ${imdbId}:`, error);
		// https://www.flaticon.com/free-icon/movie_4263893?term=movie&page=1&position=38&origin=tag&related_id=4263893
		return '/placeholder-poster.png';
	}
};

const fetchAllGenres = async (): Promise<Genre[]> => {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('unique_genres')
    .select('genre_name')
  
  if (error) {
    console.error("Error fetching genres:", error);
    throw new Error("Error fetching genres");
  }
  
  console.log("Returned genres count:", data.length);
  console.log("First few genres:", data.slice(0, 5));
  
  return data as Genre[];
};

const fetchMoviesByName = async (term: string, limit: number = 12): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: supabaseMovies, error } = await supabase
		.from("Movies")
		.select("*")
		.ilike('title', `%${term}%`)
		.limit(limit)
	if (error) {
		console.error("Database error:", error);
		throw new Error("Error with querying movies");
	}
	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

	return movies;
}

export {
	fetchMovies,
	fetchPopularMovies,
	fetchFeaturedMovies,
	fetchMoviesByGenre,
	getMoviePosterImage,
	fetchAllGenres,
	fetchAwardWinningMovies,
	fetchQuickMovies,
	fetchLongMovies,
	fetchMoviesByName,
};
