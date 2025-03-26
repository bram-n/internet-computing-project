import Image from "next/image";
import ItemsSlider from "@/app/ui/home/items-slider";
import ItemsBlock from "@/app/ui/home/items-block";

export default function Home() {
	return (
		<div>
			<section>
				<ItemsSlider />
			</section>
			<section>
				<div className="m-6 flex flex-col flex-wrap justify-evenly items-center gap-6 md:flex-row">
					<ItemsBlock cardTitle="Cool Items" />
					<ItemsBlock cardTitle="Neat Clothes" />
					<ItemsBlock cardTitle="For You" />
					<ItemsBlock cardTitle="Hot Items" />
				</div>
			</section>
		</div>
		// header w/ search DONE
		// TODO: items section (3-4)
		// fancy slider thing DONE
		// about links DONE (in footer)
		// footer DONE
	);
}
