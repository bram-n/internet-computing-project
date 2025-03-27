import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const SortSelect = () => {
	return (
		<Select>
			<SelectTrigger className="w-full">
				<SelectValue placeholder="Sort by..." />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="relevance">Relevance</SelectItem>
				<SelectItem value="trending">Trending</SelectItem>
				<SelectItem value="latest">Latest Arrivals</SelectItem>
			</SelectContent>
		</Select>
	);
};

export default SortSelect;