import { createClient } from "@/app/supabase/server";
import { Movie } from "./definitions";

const fetchMovies = async (limit: number = 10): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: supabaseMovies, error } = await supabase
		.from<any, Movie>("Movies")
		.select()
		.limit(limit);
	if (error) {
		console.error("Database error:", error);
		throw new Error("Error with querying movies");
	}
	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

	return movies;
};

// just get random movies for now
const fetchPopularMovies = async (limit: number = 5): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: supabaseMovies, error } = await supabase
		.from<any, Movie>("Movies")
		.select()
		.limit(limit);
	if (error) {
		console.error("Database error:", error);
		throw new Error("Error with querying POPULAR movies");
	}

	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

	return movies;
};

// just get random movies for now
const fetchFeaturedMovies = async (limit: number = 3): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: supabaseMovies, error } = await supabase
		.from<any, Movie>("Movies")
		.select()
		.limit(limit);
	if (error) {
		console.error("Database error:", error);
		throw new Error("Error with querying POPULAR movies");
	}

	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

	return movies;
};

const fetchQuickMovies = async (limit: number = 3, queryParam: string): Promise<Movie[]> => {
	const supabase = await createClient();
	const { data: supabaseMovies, error } = await supabase
		.from<any, Movie>("Movies")
		.select("*")
		.lte("runtimeMinutes", 90)
		.limit(limit);
	if (error) {
		console.error("Database error:", error);
		throw new Error("Error with querying POPULAR movies");
	}

	const movies: Movie[] = (supabaseMovies as Movie[]) || [];

	return movies;
};

const getMoviePosterImage = async (imdbId: string): Promise<string> => {
	const apiKey = process.env.TMDB_API_KEY!;

	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/find/${imdbId}?api_key=${apiKey}&external_source=imdb_id`
		);

		const data = await response.json();

		if (!data.movie_results) {
			throw new Error("No movie found for this imdbID");
		}

		const posterPath = data.movie_results[0].poster_path;

		if (!posterPath) {
			throw new Error("No poster found for this imdbID");
		}

		return `https://image.tmdb.org/t/p/original${posterPath}`;
	} catch (error) {
		console.error("Error getting movie poster:", error);
		return "";
	}
};

export {
	fetchMovies,
	fetchPopularMovies,
	fetchFeaturedMovies,
	getMoviePosterImage,
};
