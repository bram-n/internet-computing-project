import ItemsBlock from "@/app/ui/home/items-block";
import { fetchMovies } from "@/lib/data";

const YourHistoryBlock = async () => {

	const previousMovies = await fetchMovies(12);

	return (
		<div className="mb-4">
			<ItemsBlock cardTitle={"Recently Viewed"} movieList={previousMovies} />
		</div>
	);
};

export default YourHistoryBlock;
