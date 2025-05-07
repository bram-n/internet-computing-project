import { fetchMovies, fetchMoviesByName } from "@/lib/data";
import MovieGrid from "@/app/ui/search/movie-grid";

const FindPage = async (props: {
	searchParams?: Promise<{
		query?: string;
	}>;
}) => {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || "";
	const movies = query ? await fetchMoviesByName(query) : await fetchMovies(20);

	return (
		<main className="px-6 bg-black text-white min-h-screen">
			<MovieGrid movies={movies} title={`All Movies`} />
		</main>
	);
};

export default FindPage;
