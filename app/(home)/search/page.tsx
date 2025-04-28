// import CategorySidebar from "@/app/ui/search/category-sidebar";
// import SortSidebar from "@/app/ui/search/sort-sidebar";
// import CategorySelect from "@/app/ui/search/category-select";
// import SortSelect from "@/app/ui/search/sort-select";
import { fetchMovies } from "@/lib/data";
import MovieGrid from "@/app/ui/search/movie-grid";

const Search = async () => {
	const movies = await fetchMovies(100);

	return (
		<main className="p-6 bg-black text-white min-h-screen">
			<MovieGrid movies={movies} title={`All Movies`} />
		</main>
	);
};

// return (
// 	<main>
// 		<div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 md:flex-row bg-white">
// 			<div className="order-first w-full flex-none md:max-w-[125px]">
// 				<div className="block md:hidden">
// 					<CategorySelect />
// 				</div>
// 				<div className="hidden md:flex">
// 					<CategorySidebar />
// 				</div>
// 			</div>
// 			<div className="order-last min-h-screen w-full md:order-none"></div>
// 			<div className="order-none w-full flex-none md:max-w-[125px] md:order-last">
// 				<div className="block md:hidden">
// 					<SortSelect />
// 				</div>

// 				<div className="hidden md:flex">
// 					<SortSidebar />
// 				</div>
// 			</div>
// 		</div>
// 	</main>
// same header
// left side bar: item categories
// right side bar: cart icon, sorting
// same about
// same footer
// );

export default Search;
