import { getMoviePosterImage } from "@/lib/data";
import Image from "next/image";
import { createClient } from "@/app/supabase/server";
import MoviePoster from "@/app/ui/movie/movie-poster";
import MovieInfo from "@/app/ui/movie/movie-info";
import MovieRatings from "@/app/ui/movie/movie-ratings";
import ActorsList from "@/app/ui/movie/actors-list";
import CriticReviews from "@/app/ui/movie/critic-reviews";
import MovieReactions from "@/components/ui/movie-reactions";

export default async function MovieDetails({ params }: { params: { movie: string } }) {
  const movieId = params.movie;

  const supabase = await createClient();
  const { data: movie, error } = await supabase
    .from("Movies")
    .select("*")
    .eq("id", movieId)
    .single();
  
  if (error || !movie) {
    console.log("Not found with full ID, trying with numeric part only");
    const numericId = movieId.includes('-') ? movieId.split('-')[0] : movieId;
    
    const { data: movieByNumericId, error: error2 } = await supabase
      .from("Movies")
      .select("*")
      .eq("id", numericId)
      .single();
      
    if (error2 || !movieByNumericId) {
      return (
        <main className="p-6 bg-black text-white min-h-screen">
          <h1>Movie not found</h1>
          <p>Tried IDs: {movieId}, {numericId}</p>
        </main>
      );
    }
    
    const moviePoster = await getMoviePosterImage(movieByNumericId.imdb_id);
    
    return (
      <main className="p-6 bg-black text-white min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">{movieByNumericId.title}</h1>
          <div>
            <Image 
              src={moviePoster} 
              alt={`Movie Poster for ${movieByNumericId.title}`}
              width={300}
              height={450}
              className="rounded-md"
            />
          </div>
          <div className="mt-4">
            <p>Runtime: {movieByNumericId.runtime_minutes} minutes</p>
            <p>IMDB ID: {movieByNumericId.imdb_id}</p>
            <div className="mt-4">
              <MovieReactions movieId={numericId} />
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  const moviePoster = await getMoviePosterImage(movie.imdb_id);
  
  return (
    <main className="p-6 bg-black text-white min-h-screen">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="order-last w-full">
            {/* Top section with poster and basic details */}
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <MoviePoster src={moviePoster} title={movie.title} />
              
              <div className="w-full md:w-2/3">
                <MovieInfo title={movie.title} runtime={movie.runtime_minutes} director="director id" />
                <MovieRatings movieId={movieId} />
                <div className="mb-4">
                  <MovieReactions movieId={movieId} />
                </div>
                <div className="mb-8">
                  <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-12 rounded-md border-2 border-white">
                    Buy
                  </button>
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