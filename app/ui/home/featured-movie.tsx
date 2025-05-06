import { getMoviePosterImage } from "@/lib/data";
import { Movie } from "@/lib/definitions";
import Image from "next/image";

interface FeaturedMovieCardProps {
	movie: Movie;
}

const FeaturedMovieCard = async ({ movie }: FeaturedMovieCardProps) => {
	const moviePoster = await getMoviePosterImage(movie.imdb_id);

	return (
		<div className="bg-neutral-900 rounded-lg overflow-hidden shadow transition-all duration-300 hover:shadow-xl hover:scale-102 mx-12 sm:mx-0 cursor-pointer">
			<div className="overflow-hidden">
				<Image
					src={moviePoster.posterPath}
					alt={movie.title}
					width={400}
					height={600}
					className="w-full object-cover transition-transform duration-300 hover:scale-108"
				/>
			</div>
		</div>
	);
};

export default FeaturedMovieCard;
