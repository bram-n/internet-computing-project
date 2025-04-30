import ItemsBlock from "@/app/ui/home/items-block";
import { fetchQuickMovies } from "@/lib/data";

const QuickMoviesBlock = async () => {

	const quickMoviesList = await fetchQuickMovies(12);

	return (
		<div className="mb-4">
			<ItemsBlock cardTitle={"Quick Watches"} movieList={quickMoviesList} />
		</div>
	);
};

export default QuickMoviesBlock;
