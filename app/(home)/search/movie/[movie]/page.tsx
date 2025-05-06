import { fetchPriceOfMovie, getMoviePosterImage, FetchMovieDetails, fetchMovieDirector } from "@/lib/data";
import Image from "next/image";
import { createClient } from "@/app/supabase/server";
import MoviePoster from "@/app/ui/movie/movie-poster";
import MovieInfo from "@/app/ui/movie/movie-info";
import MovieRatings from "@/app/ui/movie/movie-ratings";
import ActorsList from "@/app/ui/movie/actors-list";
import CriticReviews from "@/app/ui/movie/critic-reviews";
import MovieReactions from "@/components/ui/movie-reactions";
import MovieBuyButton from "@/app/ui/movie/movie-buy-button";
import type { MoviePrice } from "@/lib/definitions";
import { notFound } from "next/navigation";

export default async function MovieDetails({ params }: { params: { movie: string } }) {

  const movieId = params.movie;
  const movie = await FetchMovieDetails({ params: { movie: movieId } });
  
  if (!movie) {
    notFound();
  }

  const director = await fetchMovieDirector({ params: { movie: movieId } }) || { name: '' };

  const moviePrice: MoviePrice[] = await fetchPriceOfMovie(movie.id) || [];

  const moviePoster = await getMoviePosterImage(movie.imdb_id);
  
  return (
    <main className="p-6 bg-black text-white min-h-screen">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="order-last w-full">
            {/* Top section with poster and basic details */}
            <div className="flex flex-col md:flex-row md:w-full gap-8 mb-10">
              <MoviePoster src={moviePoster} title={movie.title} />
              
              <div className="w-full md:w-1/3">
                <MovieInfo title={movie.title} runtime={movie.runtime_minutes} director={director.name} year={movie.year} />
                <MovieRatings movieId={movieId} />
                <div className="mb-4">
                  <MovieReactions movieId={movieId} />
                </div>
                <div className="mb-8">
                  <MovieBuyButton 
                    movie={movie} 
                    moviePrice={moviePrice}
                  />
                </div>
              </div>
            </div>
            <ActorsList />
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