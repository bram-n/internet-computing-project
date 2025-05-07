import Image from "next/image";
import { fetchMovieRatings } from "@/lib/data";

export default async function MovieRatings({ movieId }: { movieId: string }) {
  const ratings = await fetchMovieRatings({ params: { movie: movieId } });

  if (!ratings) {
    return null;
  }


  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Critic Ratings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ratings.imdb_rating && (
          <div className="bg-gray-900 p-4 rounded-lg flex flex-col sm:flex-row items-center min-w-0">
            <Image 
              src="/imdb.png" 
              alt="IMDb Rating" 
              width={40} 
              height={40} 
              className="mr-0 sm:mr-4 mb-2 sm:mb-0"
            />
            <div className="min-w-0">
              <div className="text-sm text-gray-400 mb-1 truncate">IMDb Rating</div>
              <div className='text-2xl sm:text-3xl font-bold break-words'>
                {ratings.imdb_rating}
              </div>
            </div>
          </div>
        )}
        {ratings.metascore && (
          <div className="bg-gray-900 p-4 rounded-lg flex flex-col sm:flex-row items-center min-w-0">
            <Image 
              src="/metascore.png" 
              alt="Metacritic Score" 
              width={40} 
              height={40} 
              className="mr-0 sm:mr-4 mb-2 sm:mb-0"
            />
            <div className="min-w-0">
              <div className="text-sm text-gray-400 mb-1 truncate">Metascore</div>
              <div className='text-2xl sm:text-3xl font-bold break-words'>
                {ratings.metascore}
              </div>
            </div>
          </div>
        )}
        {ratings.tomatometer && (
          <div className="bg-gray-900 p-4 rounded-lg flex flex-col sm:flex-row items-center min-w-0">
            <Image 
              src="/tomato.png" 
              alt="Rotten Tomatoes Score" 
              width={40} 
              height={40} 
              className="mr-0 sm:mr-4 mb-2 sm:mb-0"
            />
            <div className="min-w-0">
              <div className="text-sm text-gray-400 mb-1 truncate">Tomatometer</div>
              <div className={'text-2xl sm:text-3xl font-bold break-words'}>
                {ratings.tomatometer}%
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 