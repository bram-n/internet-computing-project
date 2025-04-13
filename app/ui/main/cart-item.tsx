import { X } from "lucide-react";

const CartItem = () => {
	return (
		<div className="relative flex w-full flex-row justify-between px-3 py-4">
			<div className="absolute -ml-3 -mt-3 p-0.5 rounded-full bg-gray-300">
				<X/>
			</div>
			<div className="flex flex-row">
				<div className="relative h-24 w-16 overflow-hidden border border-neutral-500 rounded-lg">
					{/* image */}
				</div>
				<div>
					{/* title and desc */}
					<a className="z-30 ml-2 flex flex-row space-x-4">
						<div className="flex flex-1 flex-col text-base">
							<span>The Godfather</span>
							<p>1972</p>
						</div>

					</a>
				</div>
			</div>
			<div>$9.99</div>
		</div>
	);
};

export default CartItem;
