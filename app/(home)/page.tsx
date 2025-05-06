import ItemsSlider from "@/app/ui/home/items-slider";
import FeaturedItems from "@/app/ui/home/featured-items";
import QuickMoviesBlock from "../ui/home/quick-movies-block";
import LongMoviesBlock from "../ui/home/long-movies-block";
import FilmNoirBlock from "../ui/home/film-noir-block";
import YourHistoryBlock from "../ui/home/your-history-block";

export default function Home() {
	return (
		<main className="max-w-8xl flex flex-col justify-center mx-auto pt-6">
			<section>
				<div className="w-full mx-4 flex items-center justify-start mb-6 text-xl">
					<h2>Recommended Items</h2>
				</div>
				<ItemsSlider />
			</section>
			<section>
				<div className="w-full mx-4 flex items-center justify-start my-6 text-xl">
					<h2>Featured Items</h2>
				</div>
				<FeaturedItems />
			</section>
			<section>
				<div className="w-full mx-4 flex items-center justify-start mb-6 mt-2 text-xl">
					<h2>Categories</h2>
				</div>
				<QuickMoviesBlock />
				<LongMoviesBlock />
				<FilmNoirBlock />
				<YourHistoryBlock />
			</section>
		</main>
		// header w/ search DONE
		// TODO: items section (3-4)
		// fancy slider thing DONE
		// about links DONE (in footer)
		// footer DONE
	);
}
