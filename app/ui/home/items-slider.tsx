import SliderItem from "./slider-item";
import { Item } from "@/lib/types";

const ItemsSlider = ({ itemsList }: { itemsList: Item[] }) => {
	// TODO: add actual items from itemsList

	return (
		<div className="w-full overflow-x-auto pb-6 pt-1">
			<ul className="flex animate-carousel gap-4">
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
				<li className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
					<SliderItem itemName={"Something Something Item"} itemPrice={2499}/>
				</li>
			</ul>
		</div>
	);
};

export default ItemsSlider;
