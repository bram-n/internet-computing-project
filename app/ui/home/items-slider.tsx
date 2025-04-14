import SliderItem from "@/app/ui/home/slider-item";
import { Item } from "@/app/lib/types";

const ItemsSlider = ({ itemsList }: { itemsList: Item[] }) => {
	const multipleItemsList: Item[] = [];
	for (let i = 0; i < 3; i++) {
		itemsList.forEach((item) => {
			multipleItemsList.push(item);
		});
	}

	return (
		<div className="w-full overflow-x-auto pb-6 pt-1">
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
