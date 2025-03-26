import Image from "next/image";
import ItemsSlider from "@/app/ui/home/items-slider";
import ItemsBlock from "@/app/ui/home/items-block";

export default function Home() {
	return (
		<main className="max-w-8xl flex flex-col justify-center mx-auto pt-6 bg-white">
			<section>
				<div className="w-full mx-4 flex items-center justify-start mb-4">
					<h2>Recommended Items</h2>
				</div>
				<ItemsSlider />
			</section>
			<section >
				<div className="w-full mx-4 flex items-center justify-start my-4">
					<h2>Popular Items</h2>
				</div>
				<div className="mt-4 mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
					<div className="md:col-span-4 md:row-span-2">
						<a className="relative block aspect-square h-full w-full" href="/">
							<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-500 rounded-xl">
								<div className="h-[710]"></div>
								<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 lg:px-20 lg:pb-[35%]">
									<div className="flex items-center rounded-full border border-neutral-500 font-semibold text-xs p-1">
										<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
											Something Something Item
										</h3>
										<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
											$24.99
										</p>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div className="md:col-span-2 md:row-span-1">
						<a className="relative block aspect-square h-full w-full" href="/">
							<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-500 rounded-xl">
								<div className="h-[710]"></div>
								<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
									<div className="flex items-center rounded-full border border-neutral-500 font-semibold text-xs p-1">
										<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
											Something Other Thing
										</h3>
										<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
											$14.99
										</p>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div className="md:col-span-2 md:row-span-1">
						<a className="relative block aspect-square h-full w-full" href="/">
							<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-500 rounded-xl">
								<div className="h-[710]"></div>
								<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
									<div className="flex items-center rounded-full border border-neutral-500 font-semibold text-xs p-1">
										<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
											Something Small Item
										</h3>
										<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
											$9.99
										</p>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
				
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
