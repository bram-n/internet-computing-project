import { useContext, createContext, useReducer } from "react";
import { Movie } from "@/lib/definitions";

export interface CartState {
	cartList: Movie[] | null;
}

type CartAction = 
	| {
			type: "ADD_TO_CART",
			movieToAdd: Movie
		}
	| {
			type: "REMOVE_FROM_CART",
			movieToRemove: Movie
		}

const initialCartState = {
	cartList: [],
}

export const CartContext = createContext(initialCartState);

const cartReducer = (state: CartState, action: CartAction) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				movieToAdd: action.movieToAdd,
			}
		case "REMOVE_FROM_CART":
			return {
				...state,
				movieToRemove: action.movieToRemove
			}
	}
}