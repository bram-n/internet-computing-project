// import { fetchMovieRatings } from "@/lib/data";
import { formatRuntime } from "@/lib/utils";
// import MovieInfo
// TODO: UPDATE THIS TO HAVE DIRECTOR AND GENRES
interface MovieInfoProps {
	title: string;
	runtime: number;
	director: string;
	year: number;
  }

export default function MovieInfo({ title, runtime, year, director }: MovieInfoProps) {
  const runtimeString = formatRuntime(runtime);
  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold mb-2">{title} <span className="font-normal">• {year}</span></h1>
      <p className="text-2xl font-light text-white mb-1">Runtime {runtimeString}</p>
      <p className="text-lg text-gray-300 mb-1">Directed by <span className="font-medium text-white">{director}</span></p>
      <p className="text-lg text-gray-400">Genres</p>
    </div>
  );
} 