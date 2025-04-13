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

// import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart } from "lucide-react";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
import CartItem from "./cart-item";

const CartSheet = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="flex justify-center items-center p-2 border border-neutral-500 rounded-xl hover:cursor-pointer">
					<ShoppingCart />
				</div>
			</SheetTrigger>
			<SheetContent side="right" className="w-full">
				<SheetHeader>
					<SheetTitle>My Cart</SheetTitle>
				</SheetHeader>
				<div className="grid gap-4 p-4">
					<div className="flex flex-col overflow-hidden">
						{/* items */}
						<CartItem />
						<CartItem />
						<CartItem />
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<div className="flex flex-col ">
							<div className="flex flex-col gap-2 mb-4">
								{/* prices */}
								<div className="flex flex-row justify-between items-center pb-1 border-b border-neutral-500">
									<div className="text-sm">Taxes</div>
									<div className="text-md font-semibold">$0.00</div>
								</div>
								<div className="flex flex-row justify-between items-center pb-1 border-b border-neutral-500">
									<div className="text-sm">Shipping</div>
									<div className="text-sm">Calculated at checkout</div>
								</div>
								<div className="flex flex-row justify-between items-center pb-1 border-b border-neutral-500">
									<div className="text-sm">Total</div>
									<div className="text-md font-semibold">$0.00</div>
								</div>
							</div>
							<Button type="submit">Proceed to Checkout</Button>
						</div>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default CartSheet;
