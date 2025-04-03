import SliderItem from "./slider-item";
import { Item } from "@/lib/types";

const ItemsSlider = ({ itemsList }: { itemsList: Item[] }) => {
	return (
	  <div className="w-full overflow-x-auto pb-6 pt-1">
		<ul className="flex animate-carousel gap-4">
		  {itemsList.map((item, index) => (
			<li key={index} className="relative aspect-square h-[30vh] w-2/3 flex-none md:w-1/3">
			  <SliderItem itemName={item.itemName} itemPrice={item.itemPrice} />
			</li>
		  ))}
		</ul>
	  </div>
	);
  };
  
  export default ItemsSlider;