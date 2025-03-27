import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const CategorySelect = () => {
	return (
		
		<Select>
		<SelectTrigger className="w-full">
			<SelectValue placeholder="Categories" />
		</SelectTrigger>
		<SelectContent>
			<SelectItem value="all">All</SelectItem>
			<SelectItem value="1">Things 1</SelectItem>
			<SelectItem value="2">Things 2</SelectItem>
		</SelectContent>
	</Select>
	);
};

export default CategorySelect;
