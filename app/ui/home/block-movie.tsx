import Link from "next/link";
import { Movie } from "@/lib/definitions";
import { getMoviePosterImage } from "@/lib/data";
import Image from "next/image";

const BlockMovie = async ({ movie }: { movie: Movie }) => {
	const poster = await getMoviePosterImage(movie.imdb_id);
	return (
		<Link href={`/search/movie/${movie.id}`}>
			<div className="w-40 h-60 border border-neutral-50 flex items-center justify-center">
				<Image src={poster} alt="Movie Poster" width={400} height={600} />
			</div>
		</Link>
	);
};

export default BlockMovie;
