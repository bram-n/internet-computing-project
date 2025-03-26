import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type ItemsBlockProps = {
	cardTitle: string;
}

const ItemsBlock = ({ cardTitle }: ItemsBlockProps) => {
	// TODO: need to fill with items
	// TODO: make this take variable titles
	return (
			<Card>
				<CardHeader>
					<CardTitle>{ cardTitle }</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col gap-4">
						<div className="flex flex-row gap-4">
							<div className="w-[120px] aspect-square bg-white border border-neutral-500 rounded-lg"></div>
							<div className="w-[120px] aspect-square bg-white border border-neutral-500 rounded-lg"></div>
						</div>
						<div className="flex flex-row gap-4">
							<div className="w-[120px] aspect-square bg-white border border-neutral-500 rounded-lg"></div>
							<div className="w-[120px] aspect-square bg-white border border-neutral-500 rounded-lg"></div>
						</div>
					</div>
				</CardContent>
				<CardFooter>
					<Link href="/" target="_self" className="hover:border-b hover:border-black">
						Shop these items
					</Link>
				</CardFooter>
			</Card>
	);
};

export default ItemsBlock;
