"use client";

import {
	Sheet,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	// SheetDescription,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import CartItem from "@/app/ui/cart/cart-item";
import { useCart } from "@/app/ui/main/context";

const CartSheet = () => {

	const { state } = useCart();
	const cartList = state.cartList || [];

	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="relative flexx justify-center items-center p-2 border border-neutral-50 rounded-xl hover:cursor-pointer">
					<ShoppingCart />
					{cartList && cartList.length > 0 && <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-sm bg-blue-600 font-medium text-[11px] text-center">
						{cartList.length}
					</div>}
				</div>
			</SheetTrigger>
			<SheetContent side="right" className="w-full text-white">
				<SheetHeader>
					<SheetTitle className="text-white">My Cart</SheetTitle>
				</SheetHeader>
				<div className="grid gap-4 p-4">
					<div className="flex flex-col overflow-hidden">
					{cartList.length === 0 ? (
							<div className="text-neutral-400">Your cart is empty.</div>
						) : (
							cartList.map((movie) => (
								<CartItem key={movie.id} movie={movie} />
							))
						)}
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<div className="flex flex-col ">
							<div className="flex flex-col gap-2 mb-4">
								<div className="flex flex-row justify-between items-center pb-1 border-b border-neutral-50">
									<div className="text-sm">Taxes</div>
									<div className="text-md font-semibold">$0.00</div>
								</div>
								<div className="flex flex-row justify-between items-center pb-1 border-b border-neutral-50">
									<div className="text-sm">Total</div>
									<div className="text-md font-semibold">$0.00</div>
								</div>
							</div>
							<Link href="/checkout" className="w-full">
								<Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Proceed to Checkout</Button>
							</Link>
						</div>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default CartSheet;
