"use client";

import { useContext, createContext, useReducer, FC, ReactNode } from "react";
import { Movie } from "@/lib/definitions";

export interface CartState {
	cartList: Movie[] | null;
}

type CartAction =
	| {
			type: "ADD_TO_CART";
			movieToAdd: Movie;
	  }
	| {
			type: "REMOVE_FROM_CART";
			movieToRemove: Movie;
	  };

interface CartContextType {
	state: CartState;
	dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
	switch (action.type) {
		case "ADD_TO_CART":
			if (state.cartList?.some((movie) => movie.id === action.movieToAdd.id)) {
				return state; // already in cart
			}
			return {
				...state,
				cartList: [...(state.cartList || []), action.movieToAdd],
			};
		case "REMOVE_FROM_CART":
			return {
				...state,
				cartList:
					state.cartList?.filter(
						(movie) => movie.id !== action.movieToRemove.id
					) || null,
			};
		default:
			return state;
	}
};

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, { cartList: [] });

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
