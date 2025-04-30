import ItemsBlock from "@/app/ui/home/items-block";
import { fetchLongMovies } from "@/lib/data";

const LongMoviesBlock = async () => {

	const longMoviesList = await fetchLongMovies(12);

	return (
		<div className="mb-4">
			<ItemsBlock cardTitle={"Marathons"} movieList={longMoviesList} />
		</div>
	);
};

export default LongMoviesBlock;
