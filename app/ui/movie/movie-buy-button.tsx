"use client";

import type { Movie } from "@/lib/definitions";
import { useCart } from "../main/context";

const MovieBuyButton = ({ movie }: { movie: Movie }) => {
	const { dispatch } = useCart();

	const handleAddToCart = () => {
		dispatch({ type: "ADD_TO_CART", movieToAdd: movie });
	};

	return (
		<button
			onClick={() => handleAddToCart()}
			className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-12 rounded-md border-2 border-white"
		>
			Add To Cart
		</button>
	);
};

export default MovieBuyButton;
