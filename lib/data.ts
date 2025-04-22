import { createClient } from "@/app/supabase/server";
import { Movie, Genre} from "./definitions";

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

const fetchMoviesByGenre = async (genreName: string, limit: number = 10): Promise<Movie[]> => {
	const supabase = await createClient();
	try {
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
	} catch (error) {
		return [];
	}
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

const getMoviePosterImage = async (imdb_id: string): Promise<string> => {
	const apiKey = process.env.TMDB_API_KEY!;
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/find/${imdb_id}?api_key=${apiKey}&external_source=imdb_id`
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

  export {
	fetchMovies,
	fetchPopularMovies,
	fetchFeaturedMovies,
	fetchMoviesByGenre,
	getMoviePosterImage,
	fetchAllGenres,
  };
