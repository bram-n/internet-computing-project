"use client";

import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { CircleSlash2, Loader2 } from "lucide-react";
import CartItem from "@/app/ui/cart/cart-item";
import { Separator } from "@/components/ui/separator";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const CheckoutPage = () => {
	return (
		<main className="max-w-xl lg:max-w-8xl flex flex-col justify-center mx-4 sm:mx-auto">
			<div className="w-full flex flex-col justify-center lg:flex-row">
				<div className="flex flex-col w-full lg:px-16 py-8 h-[100vh] lg:w-1/2 lg:border-r lg:border-neutral-50 order-last lg:order-first">
					<div className="hidden mb-6 lg:flex">
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
								<div className="flex items-center flex-row space-x-2">
									<Checkbox id="offers" />
									<label
										htmlFor="offers"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Email me with news and offers
									</label>
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
								<Loader2 className="animate-spin" />
								Pay Now
							</Button>
						</div>
					</div>
				</div>
				<div className="order-first my-6 flex lg:hidden">
					<Link href="/">
						<Image src="/logo.svg" alt="3AM Movies" width={40} height={40} />
					</Link>
				</div>
				<div className="flex order-none justify-center lg:hidden">
					<Accordion type="single" collapsible className="w-full border-y">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								<div className="w-full flex flex-row justify-between items-center">
									<div>Order summary</div>
									<div className="text-lg font-semibold">$0.00</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div className="flex flex-col">
									<div className="max-h-1/2 gap-4 mb-4 overflow-auto">
										<div className="flex flex-col">
											{/* items */}
											<CartItem />
											<CartItem />
											<CartItem />
											<CartItem />
										</div>
									</div>
									<div className="mb-2">
										<div className="flex flex-col gap-2">
											<div className="flex flex-row justify-between items-center">
												<div className="text-md font-semibold">
													Subtotal &#183; 3 items
												</div>
												<div className="text-md font-semibold">$0.00</div>
											</div>
											<div className="flex flex-row justify-between items-center">
												<div className="text-xl font-bold">Total</div>
												<div className="text-xl font-bold">$0.00</div>
											</div>
										</div>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>

				<div className="hidden flex-col px-16 py-8 md:w-1/2 order-first lg:flex lg:order-last">
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
