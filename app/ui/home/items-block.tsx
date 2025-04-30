import {
	Card,
	CardContent,
	// CardDescription,
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
import { Movie } from "@/lib/definitions";
import BlockMovie from "./block-movie";

type ItemsBlockProps = {
	cardTitle: string;
	movieList: Movie[];
};

const ItemsBlock = async ({ cardTitle, movieList }: ItemsBlockProps) => {
	
	return (
		<Card className="bg-black text-white">
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
							{movieList.map((movie, index) => (
								<CarouselItem
									className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/5"
									key={index}
								>
									<BlockMovie movie={movie} />
								</CarouselItem>
							))}
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
						className="hover:border-b hover:border-white"
					>
						Shop these items
					</Link>
				</div>
			</CardFooter>
		</Card>
	);
};

export default ItemsBlock;
