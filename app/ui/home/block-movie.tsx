import Link from "next/link";
import { Movie } from "@/lib/definitions";
import { getMoviePosterImage } from "@/lib/data";
import Image from "next/image";

const BlockMovie = async ({ movie }: { movie: Movie }) => {
	const { posterPath } = await getMoviePosterImage(movie.imdb_id);
	return (
		<Link href={`/search/movie/${movie.id}`}>
			<div className="w-40 h-60 flex items-center justify-center">
				<Image src={posterPath} alt="Movie Poster" width={400} height={600} className="rounded-md"/>
			</div>
		</Link>
	);
};

export default BlockMovie;
