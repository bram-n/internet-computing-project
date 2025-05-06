import { fetchFeaturedMovies } from "@/lib/data";
import FeaturedMovieCard from "./featured-movie";

const FeaturedItems = async () => {
	const featuredMovies = await fetchFeaturedMovies(4);

	return (
		<div className="px-2">
			<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{featuredMovies.map((movie) => (
					<FeaturedMovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
};

export default FeaturedItems;
