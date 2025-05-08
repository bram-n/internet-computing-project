"use client";

import { X } from "lucide-react";
import type { Movie } from "@/lib/definitions";
import { useCart } from "@/app/ui/main/context";
import CartMovie from "./cart-movie";
import { formatCurrency } from "@/lib/utils";

const CartItem = ({ movie }: { movie: Movie }) => {
	const { dispatch } = useCart();

	const handleRemove = () => {
		dispatch({ type: "REMOVE_FROM_CART", movieToRemove: movie });
	};

	return (
		<div className="relative flex w-full flex-row justify-between px-3 py-4">
			<div
				onClick={() => handleRemove()}
				className="absolute -ml-3 -mt-3 p-0.5 rounded-full bg-gray-600 z-10 cursor-pointer"
			>
				<X />
			</div>
			<CartMovie movie={movie} />
			<div>{formatCurrency(movie.price)}</div>
		</div>
	);
};

export default CartItem;
