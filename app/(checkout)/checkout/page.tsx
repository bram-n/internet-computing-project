"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CircleSlash2, Loader2 } from "lucide-react";
import CartItem from "@/app/ui/main/cart-item";
import { Separator } from "@/components/ui/separator";

const CheckoutPage = () => {
	return (
		<main className="max-w-8xl">
			<div className="flex flex-row">
				<div className="flex flex-col px-16 py-8 h-[100vh] md:w-1/2 md:border-r md:border-neutral-50">
					<div className="mb-6">
						<Link href="/">
							<Image src="/logo.svg" alt="3AM Movies" width={40} height={40} />
						</Link>
					</div>

					<div className="max-w-xl w-full">
						<div className="mb-8">
							<h1 className="font-bold text-xl mb-4">Contact</h1>
							<div className="flex flex-col space-y-4">
								<Input
									type="email"
									placeholder="Email Address"
									required
								></Input>
								<div className="flex items-top flex-row space-x-2">
									<Checkbox />
									<Label>Email me with news and offers</Label>
								</div>
							</div>
						</div>
						<div className="mb-8">
							<h1 className="font-bold text-xl mb-2">Payment</h1>
							<p className="text-sm text-gray-400 mb-4">
								Transactions are not secure or encrypted.
							</p>
							<div className="flex flex-col justify-center items-center space-y-2 h-30 w-full bg-gray-700 rounded-lg">
								<div>
									<CircleSlash2 />
								</div>
								<p className="text-sm text-white">
									This store cannot accept payments at this time.
								</p>
							</div>
						</div>
						<div className="flex justify-end items-center">
							<Button
								className="disabled:bg-blue-900 disabled:cursor-not-allowed"
								disabled
							>
								<Loader2 className="animate-spin"/>
								Pay Now
							</Button>
						</div>
					</div>
				</div>
				<div className="flex flex-col px-16 py-8 md:w-1/2">
					<div className="max-h-1/2 gap-4 mb-4 overflow-auto">
						<div className="flex flex-col">
							{/* items */}
							<CartItem />
							<CartItem />
							<CartItem />
							<CartItem />
							<CartItem />
						</div>
					</div>
					<Separator />
					<div className="mt-4">
						<div className="flex flex-col gap-2 mb-4 ">
							<div className="flex flex-row justify-between items-center pb-1">
								<div className="text-md font-semibold">
									Subtotal &#183; 3 items
								</div>
								<div className="text-md font-semibold">$0.00</div>
							</div>
							<div className="flex flex-row justify-between items-center pb-1">
								<div className="text-xl font-bold">Total</div>
								<div className="text-xl font-bold">$0.00</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default CheckoutPage;
