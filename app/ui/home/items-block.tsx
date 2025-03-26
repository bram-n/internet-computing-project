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
				<div className="flex flex-col gap-4 xl:flex-row">
					<div className="flex flex-row gap-4">
						<div className="bg-white border border-neutral-500 rounded-lg">
							<div className="w-auto min-w-30 h-30"></div>
							<div className="w-30 h-10 border-t border-black"></div>
						</div>
						<div className="bg-white border border-neutral-500 rounded-lg">
							<div className="w-auto min-w-30 h-30"></div>
							<div className="w-30 h-10 border-t border-black"></div>
						</div>
					</div>
					<div className="flex flex-row gap-4">
						<div className="bg-white border border-neutral-500 rounded-lg">
							<div className="w-auto min-w-30 h-30"></div>
							<div className="w-30 h-10 border-t border-black"></div>
						</div>
						<div className="bg-white border border-neutral-500 rounded-lg">
							<div className="w-auto min-w-30 h-30"></div>
							<div className="w-30 h-10 border-t border-black"></div>
						</div>
					</div>
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
