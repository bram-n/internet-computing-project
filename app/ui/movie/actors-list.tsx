import Image from "next/image";
import { fetchMovieCast } from "@/lib/data";
import { ActorsListProps } from "@/lib/definitions";

export default async function ActorsList({ tmdbId }: ActorsListProps) {
  if (!tmdbId) return null;
  
  const cast = await fetchMovieCast(tmdbId);
  
  if (cast.length === 0) return null;

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Cast</h2>
      <div className="flex flex-wrap gap-8">
        {cast.map((actor, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-2 border-white">
              {actor.profile_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                  alt={actor.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-4xl text-gray-400">?</span>
              )}
            </div>
            <p className="mt-2 text-center">
              <span className="font-medium">{actor.name}</span>
              <br />
              <span className="text-sm text-gray-400">{actor.character}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 