import { fetchPriceOfMovie, getMoviePosterImage, FetchMovieDetails, fetchMovieDirector, getMovieOverview, fetchMovieContentRating } from "@/lib/data";
import MoviePoster from "@/app/ui/movie/movie-poster";
import MovieInfo from "@/app/ui/movie/movie-info";
import MovieRatings from "@/app/ui/movie/movie-ratings";
import ActorsList from "@/app/ui/movie/actors-list";
import CriticReviews from "@/app/ui/movie/critic-reviews";
import MovieReactions from "@/components/ui/movie-reactions";
import MovieBuyButton from "@/app/ui/movie/movie-buy-button";
import type { MoviePrice } from "@/lib/definitions";

export type paramsType = Promise<{ query?: string;}>;

export default async function MovieDetails(params : { movie: paramsType }) {

  const movieParam = await params.movie;
  const movieId = movieParam.query;

  if (typeof movieId !== 'string' || !movieId) {
    return (
			<main className="px-6 bg-black text-white min-h-screen">
				<div>Error: Movie ID is invalid or missing.</div>
			</main>
		);
  }

  const movie = await FetchMovieDetails({ params: { movie: movieId } });
  
  if (!movie) {
    return (
			<main className="px-6 bg-black text-white min-h-screen">
				<div>Error: Movie not found.</div>
			</main>
		);
  }

  const director = await fetchMovieDirector({ params: { movie: movieId } }) || { name: '' };

  const moviePrice: MoviePrice[] = await fetchPriceOfMovie(movie.id) || [];

  const { posterPath: moviePoster, tmdbId } = await getMoviePosterImage(movie.imdb_id);
  const movieOverview = tmdbId ? await getMovieOverview(tmdbId) : null;
  const contentRating = tmdbId ? await fetchMovieContentRating(tmdbId) : null;
  
  return (
    <main className="p-6 bg-black text-white min-h-screen">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="order-last w-full md:w-full">
            {/* Top section with poster and basic details */}
            <div className="flex flex-col md:flex-row md:w-full gap-8 mb-10">
              <MoviePoster src={moviePoster} title={movie.title} />
              
              <div className="w-full mb-4">
                <MovieInfo 
                  title={movie.title} 
                  runtime={movie.runtime_minutes} 
                  director={director.name} 
                  year={movie.year}
                  overview={movieOverview || ''} 
                  rating={contentRating}
                />
                <MovieRatings movieId={movieId} />
                <div className="mb-4">
                  <MovieReactions movieId={movieId} />
                </div>
                <div className="mb-2">
                  <MovieBuyButton 
                    movie={movie} 
                    moviePrice={moviePrice}
                  />
                </div>
              </div>
              
            </div>
            <ActorsList tmdbId={tmdbId} />
            <CriticReviews movieId={movieId} />
          </div>
        </div>
      </div>
    </main>
  );
}

// Todo get the Poster, Title, Actors, Director, Watch time, Review Statistics, Ratings, Awards
// https://sketchfab.com/3d-models/emmy-award-29a62bb7fd664c7796c285504860fd51 mayeb add this for the award
// https://www.svgrepo.com/svg/118870/oscar-academy-award other option
// https://www.freepik.com/premium-psd/oscar-movie-trophy-white-background-ar-34-style-raw-job-id-a4954bbb3f734a74b66361468dd0259d_223617061.htm#fromView=keyword&page=1&position=8&uuid=21754a70-43e4-451f-9448-65bde28882fb&query=Oscar+3d
// https://icons8.com/icons/set/metascore