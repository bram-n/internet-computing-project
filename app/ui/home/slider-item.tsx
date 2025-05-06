import Link from "next/link";
import { Movie, MoviePrice} from "@/lib/definitions";
import { getMoviePosterImage, fetchPriceOfMovie} from "@/lib/data";
import Image from "next/image";

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
					<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
						<div className="flex items-center rounded-full border border-neutral-50 font-semibold text-xs p-1">
							<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
								{movie.title}
							</h3>
							<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
								${moviePrice[0]?.price}
							</p>
						</div>
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
