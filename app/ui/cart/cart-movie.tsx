"use client";

import type { Movie } from "@/lib/definitions";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const CartMovie = ({ movie }: { movie: Movie }) => {
	const [moviePoster, setMoviePoster] = useState<string>("");
	useEffect(() => {
    const getPoster = async () => {
      try {
        const response = await fetch(`/api/movie-poster?imdbId=${movie.imdb_id}`);
				if (!response.ok) {
          throw new Error(`Failed to fetch poster: ${response.statusText}`);
        }
        const data = await response.json();
        setMoviePoster(data.poster);
      } catch (error) {
        console.error("Error fetching movie poster:", error);
      }
    };
    getPoster();
  }, [movie.imdb_id]);

	return (
		<Link href={`/search/movie/${movie.id}`}>
			<div className="flex flex-row">
				<div className="relative h-24 w-16 overflow-hidden border border-neutral-50 rounded-lg">
					<Image
						src={moviePoster || "/logo.svg"}
						alt="Movie Poster"
						width={300}
						height={450}
					></Image>
				</div>
				<div>
					<div className="z-30 ml-2 flex flex-row space-x-4">
						<div className="flex flex-1 flex-col text-base">
							<span>{movie.title}</span>
							{/* release date */}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CartMovie;
