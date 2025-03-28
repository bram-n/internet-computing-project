import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";

type ItemsBlockProps = {
	cardTitle: string;
};

const ItemsBlock = ({ cardTitle }: ItemsBlockProps) => {
	// TODO: need to fill with items
	// TODO: make this take variable titles
	return (
		<Card>
			<CardHeader>
				<CardTitle>{cardTitle}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex items-center justify-center">
					<Carousel
						opts={{
							align: "start",
						}}
						className="max-w-sm sm:max-w-md md:max-w-[calc(100%-200px)]"
					>
						<CarouselContent>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
							<CarouselItem className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5">
								<div className="w-40 h-60 border border-neutral-500 flex items-center justify-center">
									<span>Item</span>
								</div>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious className="hidden sm:inline-flex" />
						<CarouselNext className="hidden sm:inline-flex" />
					</Carousel>
				</div>
			</CardContent>
			<CardFooter>
				<div>
					<Link
						href="/"
						target="_self"
						className="hover:border-b hover:border-black"
					>
						Shop these items
					</Link>
				</div>
			</CardFooter>
		</Card>
	);
};

export default ItemsBlock;
