import {
	fetchPriceOfMovie,
	getMoviePosterImage,
	FetchMovieDetails,
	fetchMovieDirector,
	getMovieOverview,
	fetchMovieContentRating,
	isUserAuthenticated,
} from "@/lib/data";
import MoviePoster from "@/app/ui/movie/movie-poster";
import MovieInfo from "@/app/ui/movie/movie-info";
import MovieRatings from "@/app/ui/movie/movie-ratings";
import ActorsList from "@/app/ui/movie/actors-list";
import CriticReviews from "@/app/ui/movie/critic-reviews";
import MovieReactions from "@/components/ui/movie-reactions";
import MovieBuyButton from "@/app/ui/movie/movie-buy-button";
import type { MoviePrice } from "@/lib/definitions";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";

type MoviePageParams = Promise<{ movie: string }>;

export default async function MovieDetails({
	params,
}: {
	params: MoviePageParams;
}) {
	const awaitedParams = await params;
	const movieId = awaitedParams.movie;

	const movie = await FetchMovieDetails({ params: { movie: movieId } });

	if (!movie) {
		notFound();
	}

	const director = (await fetchMovieDirector({
		params: { movie: movieId },
	})) || { name: "" };

	const moviePrice: MoviePrice[] = (await fetchPriceOfMovie(movie.id)) || [];

	const { posterPath: moviePoster, tmdbId } = await getMoviePosterImage(
		movie.imdb_id
	);
	const movieOverview = tmdbId ? await getMovieOverview(tmdbId) : null;
	const contentRating = tmdbId ? await fetchMovieContentRating(tmdbId) : null;

	const isUserAllowed = await isUserAuthenticated();

	return (
		<main className="p-6 bg-black text-white min-h-screen">
			<div className="mx-auto max-w-screen-2xl">
				<div className="flex flex-col md:flex-row gap-8">
					<div className="order-last w-full md:w-full">
						{/* Top section with poster and basic details */}
						<div className="flex flex-col md:flex-row md:w-full gap-8 mb-10">
							<MoviePoster src={moviePoster} title={movie.title} />

							<div className="w-full mb-4">
								<MovieInfo
									title={movie.title}
									runtime={movie.runtime_minutes}
									director={director.name}
									year={movie.year}
									overview={movieOverview || ""}
									rating={contentRating}
								/>
								<MovieRatings movieId={movieId} />
								<div className="mb-4 flex justify-center md:justify-start">
									<MovieReactions movieId={movieId} />
								</div>
                {/* Routing to checkout will force users to login */}
								{!isUserAllowed && (
									<div className="mb-2 flex justify-center md:justify-start">
										<button
											className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md border-2 border-white"
										>
                      <Link href="/checkout">Please Log In to Buy</Link>
										</button>
									</div>
								)}
								{isUserAllowed && (
									<div className="mb-2 flex justify-center md:justify-start">
										<MovieBuyButton movie={movie} moviePrice={moviePrice} />
									</div>
								)}
							</div>
						</div>
						<ActorsList tmdbId={tmdbId} />
						<CriticReviews movieId={movieId} />
					</div>
				</div>
			</div>
		</main>
	);
}
