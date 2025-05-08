import SliderItem from "@/app/ui/home/slider-item";
import {  Movie } from "@/lib/definitions";
import { fetchPopularMovies, fetchRecommendedMovies }  from "@/lib/data";

const ItemsSlider = async () => {
	const recommendedMoviesData: Movie[] | null = await fetchRecommendedMovies();
	const recommendedMovies: Movie[] = recommendedMoviesData || [];
	
	const duplicateMovieList: Movie[] = [];
	for (let i = 0; i < 3; i++) {
		recommendedMovies.forEach((movie) => {
			duplicateMovieList.push(movie);
		});
	}
	return (
		
		<div className="w-full overflow-x-auto pb-6 pt-1 bg-black text-white">
			<ul className="flex items-center animate-carousel gap-4">
					{duplicateMovieList.map((movie, index) => (
						<li
							key={index}
							className="relative aspect-auto flex-none"
						>
							<SliderItem movie={movie} />
						</li>
					))}
				</ul>
			</div>
	);
};

export default ItemsSlider;
