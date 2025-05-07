"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { 
	useSearchParams, 
	useRouter 
} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
	const searchParams = useSearchParams();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);
		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}
		replace(`/search?${params.toString()}`);
	}, 300);

	return (
		<div className="relative md:w-80 xl:w-full">
			<Input
				placeholder="Search for items..."
				onChange={(e) => handleSearch(e.target.value)}
				defaultValue={searchParams.get('query')?.toString()}
			/>
			<div className="absolute top-0 right-0 mr-3 flex h-full items-center w-4">
				<Search />
			</div>
		</div>
	);
};

export default SearchBar;
