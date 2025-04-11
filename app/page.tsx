import ItemsSlider from "@/app/ui/home/items-slider";
import FeaturedItems from "./ui/home/featured-items";
import ItemsBlock from "./ui/home/items-block";

export default function Home() {
	return (
		<main className="max-w-8xl flex flex-col justify-center mx-auto pt-6 bg-white border-t border-neutral-500">
			<section>
				<div className="w-full mx-4 flex items-center justify-start mb-4">
					<h2>Recommended Items</h2>
				</div>
				<ItemsSlider itemsList={[
						{ itemName: "Something Something Item", itemPrice: 999 },
						{ itemName: "Something Something Item", itemPrice: 999 },
						{ itemName: "Something Something Item", itemPrice: 999 },
						{ itemName: "Something Something Item", itemPrice: 999 },
					]}/>
			</section>
			<section>
				<div className="w-full mx-4 flex items-center justify-start my-4">
					<h2>Popular Items</h2>
				</div>
				<FeaturedItems
					featuredItemList={[
						{ itemName: "Something Something Item", itemPrice: 999 },
						{ itemName: "Something Something Item", itemPrice: 999 },
						{ itemName: "Something Something Item", itemPrice: 999 },
					]}
				/>
			</section>
			<section className="gap-2">
				<ItemsBlock cardTitle={"Cool Items"}/>
				<ItemsBlock cardTitle={"New Stuff"} />
				<ItemsBlock cardTitle={"Deals"} />
				<ItemsBlock cardTitle={"Your History"} />
			</section>
		</main>
		// header w/ search DONE
		// TODO: items section (3-4)
		// fancy slider thing DONE
		// about links DONE (in footer)
		// footer DONE
	);
}
