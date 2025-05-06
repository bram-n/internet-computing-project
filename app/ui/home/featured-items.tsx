import { fetchFeaturedMovies } from "@/lib/data";
import FeaturedMovieCard from "./featured-movie";

const FeaturedItems = async () => {
	const featuredMovies = await fetchFeaturedMovies(4);

	return (
		<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{featuredMovies.map((movie) => (
				<FeaturedMovieCard key={movie.id} movie={movie} />
			))}
		</div>
	);

	// return (
	// 	<div className="mt-4 grid max-w-screen-2xl gap-4 pb-4 md:grid-cols-4 md:grid-rows-6 md:max-h-[calc(100vh-200px)] mx-10 lg:mx-20">
	// 		<div className="md:col-span-2 md:row-span-4">
	// 			<Link
	// 				className="relative block h-full w-full"
	// 				href={`/search/movie/${featuredMovies[0].id}`}
	// 			>
	// 				<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-50 rounded-xl">
	// 					<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 lg:px-20 lg:pb-[35%]">
	// 						<div className="flex items-center rounded-full border border-neutral-50 font-semibold text-xs p-1">
	// 							<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
	// 								{featuredMovies[0].title}
	// 							</h3>
	// 							<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
	// 								${599 / 100}
	// 							</p>
	// 						</div>
	// 					</div>
	// 					<div className="flex items-center justify-center overflow-hidden">
	// 						<Image
	// 							src={movieOnePoster}
	// 							alt="Movie Poster"
	// 							height={700}
	// 							width={450}
	// 						></Image>
	// 					</div>
	// 				</div>
	// 			</Link>
	// 		</div>
	// 		<div className="md:col-span-2 md:row-span-2">
	// 			<Link
	// 				className="relative block h-full w-full"
	// 				href={`/search/movie/${featuredMovies[1].id}`}
	// 			>
	// 				<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-50 rounded-xl">
	// 					<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
	// 						<div className="flex items-center rounded-full border border-neutral-50 font-semibold text-xs p-1">
	// 							<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
	// 								{featuredMovies[1].title}
	// 							</h3>
	// 							<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
	// 								${599 / 100}
	// 							</p>
	// 						</div>
	// 					</div>
	// 					<div className="flex items-center justify-center overflow-hidden">
	// 						<Image
	// 							src={movieTwoPoster}
	// 							alt="Movie Poster"
	// 							height={700}
	// 							width={500}
	// 						></Image>
	// 					</div>
	// 				</div>
	// 			</Link>
	// 		</div>
	// 		<div className="md:col-span-2 md:row-span-4">
	// 			<Link
	// 				className="relative block h-full w-full"
	// 				href={`/search/movie/${featuredMovies[2].id}`}
	// 			>
	// 				<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-50 rounded-xl">
	// 					<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
	// 						<div className="flex items-center rounded-full border border-neutral-50 font-semibold text-xs p-1">
	// 							<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
	// 								{featuredMovies[2].title}
	// 							</h3>
	// 							<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
	// 								${599 / 100}
	// 							</p>
	// 						</div>
	// 					</div>
	// 					<div className="flex items-center justify-center overflow-hidden">
	// 						<Image
	// 							src={movieThreePoster}
	// 							alt="Movie Poster"
	// 							height={700}
	// 							width={500}
	// 						></Image>
	// 					</div>
	// 				</div>
	// 			</Link>
	// 		</div>
	// 		<div className="md:col-span-2 md:row-span-2">
	// 			<Link
	// 				className="relative block h-full w-full"
	// 				href={`/search/movie/${featuredMovies[3].id}`}
	// 			>
	// 				<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-50 rounded-xl">
	// 					<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 lg:px-20 lg:pb-[35%]">
	// 						<div className="flex items-center rounded-full border border-neutral-50 font-semibold text-xs p-1">
	// 							<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
	// 								{featuredMovies[3].title}
	// 							</h3>
	// 							<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
	// 								${599 / 100}
	// 							</p>
	// 						</div>
	// 					</div>
	// 					<div className="flex items-center justify-center overflow-hidden">
	// 						<Image
	// 							src={movieFourPoster}
	// 							alt="Movie Poster"
	// 							height={700}
	// 							width={450}
	// 						></Image>
	// 					</div>
	// 				</div>
	// 			</Link>
	// 		</div>
	// 	</div>
	// );
};

export default FeaturedItems;
