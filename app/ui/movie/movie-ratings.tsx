import Image from "next/image";
import { fetchMovieRatings } from "@/lib/data";

export default async function MovieRatings({ movieId }: { movieId: string }) {
  const ratings = await fetchMovieRatings({ params: { movie: movieId } });

  if (!ratings) {
    return null;
  }

  return (
    <div className="mb-6">
      <div className="flex items-center gap-6">
        {ratings.imdb_rating && (
          <div className="flex items-center">
            <Image 
              src="/imdb.png" 
              alt="IMDb Rating" 
              width={40} 
              height={40} 
              className="mr-2"
            />
            <span>{ratings.imdb_rating}</span>
          </div>
        )}
        {ratings.metascore && (
          <div className="flex items-center">
            <Image 
              src="/metascore.png" 
              alt="Metacritic Score" 
              width={40} 
              height={40} 
              className="mr-2"
            />
            <span>{ratings.metascore}</span>
          </div>
        )}
        {ratings.tomatometer && (
          <div className="flex items-center">
            <Image 
              src="/tomato.png" 
              alt="Rotten Tomatoes Score" 
              width={40} 
              height={40} 
              className="mr-2"
            />
            <span>{ratings.tomatometer}%</span>
          </div>
        )}
      </div>
    </div>
  );
} 