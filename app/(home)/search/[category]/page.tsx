import { fetchMoviesByGenre } from "@/lib/data";
import MovieGrid from "@/app/ui/search/movie-grid";

export type paramsType = Promise<{ query?: string;}>;

export default async function Category( params : { params: paramsType }) {
	const resolvedInnerParams = await params.params;
	const categoryFromQuery = resolvedInnerParams.query;

	if (!categoryFromQuery) {
		return (
			<main className="px-6 bg-black text-white min-h-screen">
				<div>Error: Category query parameter is missing.</div>
			</main>
		);
	}

	const categoryName = decodeURIComponent(categoryFromQuery);
	const movies = await fetchMoviesByGenre(categoryName);
	const formattedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
	
	return (
		<main className="px-6 bg-black text-white min-h-screen">
			<MovieGrid movies={movies} title={`${formattedCategoryName} Movies`} />
		</main>
	);
}
