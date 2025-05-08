"use client";

import type { Movie, MoviePrice } from "@/lib/definitions";
import { useCart } from "../main/context";
import { formatCurrency } from "@/lib/utils";

const MovieBuyButton = ({ movie, moviePrice }: { movie: Movie, moviePrice: MoviePrice[] }) => {
	const { dispatch } = useCart();
	const price = moviePrice[0].price;

	const handleAddToCart = () => {
		dispatch({ type: "ADD_TO_CART", movieToAdd: { ...movie, price } });
	};

	return (
		<button
			onClick={() => handleAddToCart()}
			className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-md border-2 border-white"
		>
			Add To Cart {formatCurrency(price)}
		</button>
	);
};

export default MovieBuyButton;
