"use client";

import {
	useContext,
	createContext,
	useReducer,
	FC,
	ReactNode,
	useEffect,
} from "react";
import { Movie } from "@/lib/definitions";
import { createClient } from "@/app/supabase/client";

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
	  }
	| {
			type: "INITIALIZE_CART";
			cartList: Movie[];
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
		case "INITIALIZE_CART":
			return {
				...state,
				cartList: action.cartList,
			};
		default:
			return state;
	}
};

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, { cartList: [] });
	const checkAuthStatus = async () => {
		const supabase = createClient();
		const {
			data: { session },
		} = await supabase.auth.getSession();
		return !!session;
	};

	useEffect(() => {
		const handleAuthCheck = async () => {
			const isAuthenticated = await checkAuthStatus();
			if (!isAuthenticated) {
				// Clear the cart from localStorage if the user is not authenticated
				localStorage.removeItem("cart");
				dispatch({ type: "INITIALIZE_CART", cartList: [] }); // Clear the cart state
				return;
			}

			// Load the cart from localStorage if the user is authenticated
			const storedCart = localStorage.getItem("cart");
			if (storedCart) {
				try {
					const parsed = JSON.parse(storedCart);
					dispatch({ type: "INITIALIZE_CART", cartList: parsed });
				} catch (error) {
					console.error("Failed to parse cart from localStorage", error);
				}
			}
		};

		handleAuthCheck();
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(state.cartList));
	}, [state.cartList]);

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
