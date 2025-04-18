import ItemsSlider from "@/app/ui/home/items-slider";
import FeaturedItems from "@/app/ui/home/featured-items";
import ItemsBlock from "@/app/ui/home/items-block";

export default function Home() {
	return (
		<main className="max-w-8xl flex flex-col justify-center mx-auto pt-6">
			<section>
				<div className="w-full mx-4 flex items-center justify-start mb-4">
					<h2>Recommended Items</h2>
				</div>
				<ItemsSlider />
			</section>
			<section>
				<div className="w-full mx-4 flex items-center justify-start my-4">
					<h2>Popular Items</h2>
				</div>
				<FeaturedItems/>
			</section>
			<section>
				<div className="mb-4">
					<ItemsBlock cardTitle={"Cool Items"} />
				</div>
				<div className="mb-4">
					<ItemsBlock cardTitle={"New Stuff"} />
				</div>
				<div className="mb-4">
					<ItemsBlock cardTitle={"Deals"} />
				</div>
				<div className="mb-4">
					<ItemsBlock cardTitle={"Your History"} />
				</div>
			</section>
		</main>
		// header w/ search DONE
		// TODO: items section (3-4)
		// fancy slider thing DONE
		// about links DONE (in footer)
		// footer DONE
	);
}
