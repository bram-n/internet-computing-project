import { formatRuntime } from "@/lib/utils";
import MovieRating from "./movie-rating";
interface MovieInfoProps {
	title: string;
	runtime: number;
	director: string;
	year: number;
	overview: string;
	rating: string | null;
}

export default function MovieInfo({ title, runtime, year, director, overview, rating }: MovieInfoProps) {
  const runtimeString = formatRuntime(runtime);
  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold mb-2">{title} <span className="font-normal">• {year}</span></h1>
      <div className="flex items-center gap-2">
        <p className="text-2xl font-light text-white mb-1">Runtime {runtimeString}</p>
        <MovieRating rating={rating} />
      </div>
      <p className="text-lg text-gray-300 mb-1">Directed by <span className="font-medium text-white">{director}</span></p>
      {overview && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-300">{overview}</p>
        </div>
      )}
    </div>
  );
} 