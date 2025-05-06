import { getMoviePosterImage } from "@/lib/data";
import { Movie } from "@/lib/definitions";
import Image from "next/image";

interface FeaturedMovieCardProps {
  movie: Movie;
}

const FeaturedMovieCard = async ({ movie }: FeaturedMovieCardProps) => {

	const moviePoster = await getMoviePosterImage(movie.imdb_id);

  return (
    <div className="bg-neutral-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      <Image
        src={moviePoster}
        alt={movie.title}
				width={400}
				height={600}
        className="w-full object-cover"
      />
    </div>
  );
};

export default FeaturedMovieCard;
