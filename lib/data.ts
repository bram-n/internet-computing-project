import { createClient } from "@/app/supabase/server";
import { Movie, Genre, MoviePrice } from "./definitions";

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

const getMoviePosterImage = async (imdbId: string): Promise<{ posterPath: string; tmdbId: string | null }> => {
	try {
		if (!imdbId) {
			console.error("Missing IMDB ID");
			return { posterPath: '/placeholder-poster.jpg', tmdbId: null };
		}

		const apiKey = process.env.TMDB_API_KEY!;
		const response = await fetch(
			`https://api.themoviedb.org/3/find/${imdbId}?api_key=${apiKey}&external_source=imdb_id`
		);

		const data = await response.json();

		// Check if movie_results exists and has at least one entry
		if (!data.movie_results || data.movie_results.length === 0) {
			console.log(`No movie results found for IMDB ID: ${imdbId}`);
			return { posterPath: '/placeholder-poster.png', tmdbId: null };
		}

		// Safely access poster_path and id
		const posterPath = data.movie_results[0]?.poster_path;
		const tmdbId = data.movie_results[0]?.id;

		if (!posterPath) {
			console.log(`No poster path found for IMDB ID: ${imdbId}`);
			return { posterPath: '/placeholder-poster.png', tmdbId };
		}

		return { 
			posterPath: `https://image.tmdb.org/t/p/w500${posterPath}`,
			tmdbId: tmdbId?.toString() || null
		};
	} catch (error) {
		console.error(`Error fetching poster for ${imdbId}:`, error);
		return { posterPath: '/placeholder-poster.png', tmdbId: null };
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

const fetchMovieRatings = async ({ params }: { params: { movie: string } }): Promise<{ imdb_rating: string; tomatometer: number; metascore: string } | null> => {
	const movieId = params.movie;
	const supabase = await createClient();
	console.log("moveid", movieId)
	const { data: ratings, error } = await supabase
		.from("review_stats")
		.select('imdb_rating, tomatometer, metascore')
		.eq('id', movieId)
		.single()
		
	console.log(ratings)
	if (error) {
		console.error("Error fetching movie ratings:", error);
		return null;
	}
	
	return ratings;
};

const fetchMovieCriticReviews = async ({ params }: { params: { movie: string } }): Promise<{ critic_name: string; publication_name: string; review_url: string; review_text: string }[] | null> => {
	const movieId = params.movie;
	const supabase = await createClient();
	
	const { data: reviews, error } = await supabase
		.from("critic_reviews")
		.select('id, critic_name, publication_name, review_url, review_text, score_sentiment')
		.eq('id', movieId);
		
	if (error) {
		console.error("Error fetching critic reviews:", error);
		return null;
	}
	
	return reviews;
};


const fetchPriceOfMovie = async (movieId: string): Promise<MoviePrice[] | null> => {
	const supabase = await createClient();

	const { data: price, error } = await supabase
		.from("prices")
		.select("*")
		.eq("id", movieId);

	if (error) {
		console.error("Error fetching critic reviews:", error);
		return null;
	}
	
	return price;
}


const fetchMovieDirector = async ({ params }: { params: { movie: string } }): Promise<{ name: string; id: string } | null> => {
	const movieId = params.movie;
	const supabase = await createClient();
	
	const { data: directorData, error: directorError } = await supabase
		.from("director")
		.select("*")
		.eq('id', movieId)
		.single();
		
	if (directorError || !directorData) {
		console.error("Error fetching director:", directorError);
		return null;
	}
	console.log(directorData)
	
	const { data: personData, error: personError } = await supabase
		.from("person_id")
		.select("*")
		.eq('person_id', directorData.person_id)
		.single();
		
	if (personError || !personData) {
		console.log(personData)
		console.error("Error fetching person:", personError);
		return null;
	}
	console.log(personData)
	return personData;
};

export async function FetchMovieDetails({ params }: { params: { movie: string } }): Promise<Movie | null> {
	const movieId = params.movie;
  
	const supabase = await createClient();
	const { data: movie, error } = await supabase
	  .from("Movies")
	  .select("*")
	  .eq("id", movieId)
	  .single();
	
	if (error) {
		console.error("Error fetching movie details:", error);
		return null;
	}
	
	return movie;
}

const fetchMovieOverview = async (tmdbId: string): Promise<string | null> => {
	try {
		if (!tmdbId) {
			console.error("Missing TMDB ID");
			return null;
		}

		const apiKey = process.env.TMDB_API_KEY!;
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${apiKey}&language=en-US`
		);

		if (!response.ok) {
			throw new Error(`TMDB API responded with status: ${response.status}`);
		}

		const data = await response.json();
		return data.overview || null;
	} catch (error) {
		console.error(`Error fetching movie overview for TMDB ID ${tmdbId}:`, error);
		return null;
	}
};

const fetchMovieCast = async (tmdbId: string): Promise<{ name: string; profile_path: string | null; character: string }[]> => {
	try {
		if (!tmdbId) {
			console.error("Missing TMDB ID");
			return [];
		}

		const apiKey = process.env.TMDB_API_KEY!;
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${tmdbId}/credits?api_key=${apiKey}&language=en-US`
		);

		if (!response.ok) {
			throw new Error(`TMDB API responded with status: ${response.status}`);
		}

		const data = await response.json();
		// Get top 6 cast members
		return data.cast.slice(0, 6).map((actor: { name: string; profile_path: string; character: string; }) => ({
			name: actor.name,
			profile_path: actor.profile_path,
			character: actor.character
		}));
	} catch (error) {
		console.error(`Error fetching movie cast for TMDB ID ${tmdbId}:`, error);
		return [];
	}
};

const fetchMovieContentRating = async (tmdbId: string): Promise<string | null> => {
	try {
		if (!tmdbId) {
			console.error("Missing TMDB ID");
			return null;
		}

		const apiKey = process.env.TMDB_API_KEY!;
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${tmdbId}/release_dates?api_key=${apiKey}`
		);

		if (!response.ok) {
			throw new Error(`TMDB API responded with status: ${response.status}`);
		}

		const data = await response.json();
		// Find US rating
		const usRelease = data.results.find((release: { iso_3166_1: string; }) => release.iso_3166_1 === 'US');
		if (!usRelease || !usRelease.release_dates || usRelease.release_dates.length === 0) {
			return null;
		}

		// Get the certification
		const rating = usRelease.release_dates[0].certification;
		return rating || null;
	} catch (error) {
		console.error(`Error fetching content rating for TMDB ID ${tmdbId}:`, error);
		return null;
	}
};

const fetchRecommendedMovies = async (): Promise<Movie[] | null> => {
	const supabase = await createClient();
	const { data: { user }, error: authError } = await supabase.auth.getUser();
	console.log("user", user);

	if (!user) {
		if (authError && authError.name === 'AuthSessionMissingError') {
			console.log("Guest user or session missing. Fetching generic movies.");
		} else if (authError) {
			console.error("Authentication error:", authError);
		} else {
			console.log("Guest user. Fetching generic movies.");
		}
		return fetchMovies(10); 
	}

	const userId = user.id;
	const { data: recommendedMoviesData, error: queryError } = await supabase
		.from("user_recommendations") 
		.select("movie_id")
		.eq('user_id', userId);

	if (queryError) {
		console.error("Error fetching user recommendations:", queryError);
		return fetchMovies(10);
	}

	if (!recommendedMoviesData || recommendedMoviesData.length === 0) {
		console.log("No recommendations found for user. Fetching generic movies.");
		return fetchMovies(10);
	}

	const ids = recommendedMoviesData.map((item: { movie_id: string }) => item.movie_id);

	const { data: movies, error: moviesError } = await supabase
		.from('Movies')
		.select('*')
		.in('id', ids)
		.limit(10);
	
	if (moviesError) {
		console.error("Error fetching movie details for recommendations:", moviesError);
		return fetchMovies(10);
	}

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
	fetchMovieRatings,
	fetchMovieCriticReviews,
	fetchPriceOfMovie,
	fetchMovieDirector,
	fetchMovieOverview as getMovieOverview,
	fetchMovieCast,
	fetchMovieContentRating,
	fetchRecommendedMovies,
};
