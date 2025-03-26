import Image from "next/image";
import ItemsSlider from "@/app/ui/home/items-slider";
import ItemsBlock from "@/app/ui/home/items-block";

export default function Home() {
	return (
		<main>
			<section>
				<ItemsSlider />
			</section>
			<section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 grid-cols-6 grid-rows-2">
				{/* <div className="m-6 flex flex-row flex-wrap justify-evenly items-center gap-6">
					<ItemsBlock cardTitle="Cool Items" />
					<ItemsBlock cardTitle="Neat Clothes" />

					<ItemsBlock cardTitle="For You" />
					<ItemsBlock cardTitle="Hot Items" />
				</div> */}
				{/* the item block is so ugly */}
			</section>
		</main>
		// header w/ search DONE
		// TODO: items section (3-4)
		// fancy slider thing DONE
		// about links DONE (in footer)
		// footer DONE
	);
}
