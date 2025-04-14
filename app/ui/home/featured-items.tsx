import { Item } from "@/app/lib/definitions";
import Link from "next/link";

const FeaturedItems = ({ featuredItemList }: { featuredItemList: Item[] }) => {
	return (
		<div className="mt-4 mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
			<div className="md:col-span-4 md:row-span-2">
				<Link className="relative block aspect-square h-full w-full" href="/">
					<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-500 rounded-xl">
						<div className="h-[710]"></div>
						<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 lg:px-20 lg:pb-[35%]">
							<div className="flex items-center rounded-full border border-neutral-500 font-semibold text-xs p-1">
								<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
									{featuredItemList[0].itemName}
								</h3>
								<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
									{featuredItemList[0].itemPrice / 100}
								</p>
							</div>
						</div>
					</div>
				</Link>
			</div>
			<div className="md:col-span-2 md:row-span-1">
				<Link className="relative block aspect-square h-full w-full" href="/">
					<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-500 rounded-xl">
						<div className="h-[710]"></div>
						<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
							<div className="flex items-center rounded-full border border-neutral-500 font-semibold text-xs p-1">
								<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
									{featuredItemList[1].itemName}
								</h3>
								<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
									{featuredItemList[1].itemPrice / 100}
								</p>
							</div>
						</div>
					</div>
				</Link>
			</div>
			<div className="md:col-span-2 md:row-span-1">
				<Link className="relative block aspect-square h-full w-full" href="/">
					<div className="h-full w-full relative items-center justify-center overflow-hidden border border-neutral-500 rounded-xl">
						<div className="h-[710]"></div>
						<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
							<div className="flex items-center rounded-full border border-neutral-500 font-semibold text-xs p-1">
								<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
									{featuredItemList[2].itemName}
								</h3>
								<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
									{featuredItemList[2].itemPrice / 100}
								</p>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default FeaturedItems;
