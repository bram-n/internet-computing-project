import { Movie } from "@/lib/definitions";
import Link from "next/link";
import Image from "next/image";
import { getMoviePosterImage } from "@/lib/data";

type MovieGridProps = {
  movies: Movie[];
  title: string;
};

const MovieGrid = async ({ movies, title }: MovieGridProps) => {
// get the posters
  const moviesWithPosters = await Promise.all(
    movies.map(async (movie) => {
      const posterPath = await getMoviePosterImage(movie.imdb_id);
      return {
        ...movie,
        posterPath
      };
    })
  );

  return (
    <div className="w-full bg-black text-white">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      {movies.length === 0 ? (
        <p>No movies found in this category</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {moviesWithPosters.map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <div className="flex flex-col h-full transition-transform hover:scale-105">
                <div className="relative aspect-[2/3] w-full mb-2">
                  <Image
                    src={movie.posterPath || ''}
                    alt={movie.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="font-medium">{movie.title}</h3>
                <p className="text-sm text-gray-400">{movie.runtime_minutes} min</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieGrid; 