"use client";
import { useEffect } from "react";
import { X } from "lucide-react";
import {fetchPriceOfMovie} from "@/lib/data";
import type { Movie, MoviePrice} from "@/lib/definitions";
import { useCart } from "@/app/ui/main/context";
import CartMovie from "./cart-movie";

const CartItem = ({ movie }: { movie: Movie }) => {
	
	// const moviePrice: MoviePrice[] = await fetchPriceOfMovie(movie.id) || [];
	
	
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
			<div>${3.99}</div>
		</div>
	);
};

export default CartItem;
