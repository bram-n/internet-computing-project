import ItemsBlock from "@/app/ui/home/items-block";
import { fetchMoviesByGenre } from "@/lib/data";

const FilmNoirBlock = async () => {

	const filmNoirMovies = await fetchMoviesByGenre("Film-noir", 12);

	return (
		<div className="mb-4">
			<ItemsBlock cardTitle={"Film Noir Movies"} movieList={filmNoirMovies} />
		</div>
	);
};

export default FilmNoirBlock;
