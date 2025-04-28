import { fetchMovies } from "@/lib/data";
import MovieGrid from "@/app/ui/search/movie-grid";

const Search = async () => {
	const movies = await fetchMovies(20);

	return (
		<main className="px-6 bg-black text-white min-h-screen">
			<MovieGrid movies={movies} title={`All Movies`} />
		</main>
	);
};

export default Search;
