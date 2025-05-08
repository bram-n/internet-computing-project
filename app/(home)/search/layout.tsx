import CategorySidebar from "@/app/ui/search/category-sidebar";
import SortSidebar from "@/app/ui/search/sort-sidebar";
import CategorySelect from "@/app/ui/search/category-select";
import SortSelect from "@/app/ui/search/sort-select";

import { fetchAllGenres } from "@/lib/data";
import SearchBar from "@/app/ui/main/search-bar";

const SearchLayout = async ({ children }: { children: React.ReactNode }) => {
	const genres = await fetchAllGenres();
	return (
		<main>
			<div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 mt-6 md:flex-row">
				<div className="order-none w-full flex-none md:max-w-[125px] md:order-first">
					<div className="block md:hidden">
						<CategorySelect genres={genres}/>
					</div>
					<div className="hidden md:flex">
						<CategorySidebar />
					</div>
				</div>
				<div className="order-last min-h-screen w-full md:order-none">
					{ children }
				</div>
				<div className="order-first w-full flex-none md:max-w-[150px] md:order-last">
					<div className="block md:hidden">
						<SearchBar />
					</div>
				</div>
			</div>
		</main>
	);
};

export default SearchLayout;
