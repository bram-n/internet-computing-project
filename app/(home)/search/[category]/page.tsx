import { fetchMoviesByGenre } from "@/lib/data";
import MovieGrid from "@/app/ui/search/movie-grid";

type PageParams = {
	category: string;
};

export default async function Category({ params }: { params: Promise<PageParams> }) {
	const resolvedParams = await params;
	const category = resolvedParams.category; 

	const categoryName = decodeURIComponent(category);
	const movies = await fetchMoviesByGenre(categoryName);
	const formattedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
	
	return (
		<main className="px-6 bg-black text-white min-h-screen">
			<MovieGrid movies={movies} title={`${formattedCategoryName} Movies`} />
		</main>
	);
}
