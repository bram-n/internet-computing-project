import SliderItem from "@/app/ui/home/slider-item";
import { 
	Item, 
	Movie 
} from "@/app/lib/definitions";
import { fetchPopularMovies }  from "@/app/lib/data";

const ItemsSlider = async ({ itemsList }: { itemsList: Item[] }) => {

	const popularMovies: Movie[] = await fetchPopularMovies(4);
	
	const multipleItemsList: Item[] = [];
	for (let i = 0; i < 3; i++) {
		itemsList.forEach((item) => {
			multipleItemsList.push(item);
		});
	}

	// const movies: Movie[] = await fetchMovies(12);
	// console.log(movies);

	return (
		<div className="w-full overflow-x-auto pb-6 pt-1 bg-black text-white">
			<ul className="flex animate-carousel gap-4">
				{multipleItemsList.map((item, index) => (
					<li
						key={index}
						className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3"
					>
						<SliderItem itemName={item.itemName} itemPrice={item.itemPrice} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default ItemsSlider;
