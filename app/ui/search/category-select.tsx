"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import type { Genre } from "@/lib/definitions";
import { useRouter } from "next/navigation";

const CategorySelect = (props: { genres: Genre[] }) => {
	const { replace } = useRouter();
	const handleSelect = (category: string) => {
		replace(`${category}`);
	};

	return (
		<Select onValueChange={(category) => handleSelect(category)}>
			<SelectTrigger className="w-full">
				<SelectValue placeholder="Categories" defaultValue={""} />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="all">All</SelectItem>
				{props.genres.map((genre) => (
					<SelectItem
						key={genre.genre_name}
						value={`/search/category/${genre.genre_name.toLowerCase()}`}
						className="hover:border-b hover:border-white"
					>
						{genre.genre_name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default CategorySelect;
