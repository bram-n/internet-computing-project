import { fetchFeaturedMovies, getMoviePosterImage } from "@/lib/data";
import { Movie } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";

const FeaturedItems = async () => {
	const featuredMovies: Movie[] = await fetchFeaturedMovies(3);

	const movieOnePoster = await getMoviePosterImage(featuredMovies[0].imdbID);
	const movieTwoPoster = await getMoviePosterImage(featuredMovies[1].imdbID);
	const movieThreePoster = await getMoviePosterImage(featuredMovies[2].imdbID);

	return (
		<div className="mt-4 mx-auto grid max-w-screen-2xl gap-4 pb-4 md:grid-cols-4 md:grid-rows-6 lg:max-h-[calc(100vh-200px)]">
			<div className="md:col-span-3 md:row-span-6">
				<Link className="relative block aspect-square h-full w-full" href="/">
					<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-50 rounded-xl">
						<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 lg:px-20 lg:pb-[35%]">
							<div className="flex items-center rounded-full border border-neutral-50 font-semibold text-xs p-1">
								<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
									{featuredMovies[0].Title}
								</h3>
								<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
									${599 / 100}
								</p>
							</div>
						</div>
						<div className="flex items-center justify-center overflow-hidden">
							<Image
								src={movieOnePoster}
								alt="Movie Poster"
								height={700}
								width={450}
							></Image>
						</div>
					</div>
				</Link>
			</div>
			<div className="md:col-span-1 md:row-span-3">
				<Link className="relative block aspect-square h-full w-full" href="/">
					<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-50 rounded-xl">
						<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
							<div className="flex items-center rounded-full border border-neutral-50 font-semibold text-xs p-1">
								<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
									{featuredMovies[1].Title}
								</h3>
								<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
									${599 / 100}
								</p>
							</div>
						</div>
						<div>
							<Image
								src={movieTwoPoster}
								alt="Movie Poster"
								height={710}
								width={470}
							></Image>
						</div>
					</div>
				</Link>
			</div>
			<div className="md:col-span-1 md:row-span-3">
				<Link className="relative block aspect-square h-full w-full" href="/">
					<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-50 rounded-xl">
						<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
							<div className="flex items-center rounded-full border border-neutral-50 font-semibold text-xs p-1">
								<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
									{featuredMovies[2].Title}
								</h3>
								<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
									${599 / 100}
								</p>
							</div>
						</div>
						<div>
							<Image
								src={movieThreePoster}
								alt="Movie Poster"
								height={710}
								width={470}
							></Image>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default FeaturedItems;
