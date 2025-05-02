"use client";

import { X } from "lucide-react";
import type { Movie } from "@/lib/definitions";
import { useCart } from "@/app/ui/main/context";
import CartMovie from "./cart-movie";

const CartItem = ({ movie }: { movie: Movie }) => {

	const { dispatch } = useCart();

	const handleRemove = () => {
		dispatch({ type: "REMOVE_FROM_CART", movieToRemove: movie });
	}

	return (
		<div className="relative flex w-full flex-row justify-between px-3 py-4">
			<div onClick={() => handleRemove()} className="absolute -ml-3 -mt-3 p-0.5 rounded-full bg-gray-300 z-10">
				<X />
			</div>
			<CartMovie movie={movie} />
			<div>$9.99</div>
		</div>
	);
};

export default CartItem;
