import Link from "next/link";
import { Movie, MoviePrice} from "@/lib/definitions";
import { getMoviePosterImage, fetchPriceOfMovie} from "@/lib/data";
import Image from "next/image";
import { formatRuntime } from "@/lib/utils";

const SliderItem = async ({ movie }: { movie: Movie }) => {
	const { posterPath } = await getMoviePosterImage(movie.imdb_id);
	const moviePrice: MoviePrice[] = await fetchPriceOfMovie(movie.id) || [];

	return (
		<>
			<Link
				className="relative bg-black text-white"
				href={`/search/movie/${movie.id}`}
				key={movie.id}
			>
				<div className="group overflow-hidden relative">
					<div className="absolute bottom-0 left-0 w-full bg-gray-800/80 px-4 py-3 flex flex-col items-start">
						<h3 className="text-lg font-semibold text-white">
							{movie.title} <span className="text-gray-300 font-normal">{formatRuntime(movie.runtime_minutes)} </span>
						</h3>
						<p className="text-sm text-blue-200 font-bold mt-1">
							${moviePrice[0]?.price}
						</p>
					</div>
					<div className="rounded-lg">
						<Image
							src={posterPath}
							alt="Movie Poster"
							width={300}
							height={450}
							className="rounded-lg"
						></Image>
					</div>
				</div>
			</Link>
		</>
	);
};

export default SliderItem;
