"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CircleSlash2 } from "lucide-react";

const CheckoutPage = () => {
	return (
		<main className="max-w-8xl">
			<div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1">
				<div className="flex flex-col px-16 py-8 h-full md:row-span-1 md:col-span-2 md:border-r md:border-neutral-50">
					<div className="mb-8">
						<Link href="/">Home</Link>
					</div>

					<div className="max-w-xl w-full">
						<form
							onSubmit={(e) => {
								console.log("submitted form data");
							}}
						>
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
								<p className="text-sm text-gray-400">All transactions are not secure or encrypted.</p>
								<div className="h-10 w-full bg-gray-500 rounded-xl">
									<div>
										<CircleSlash2 />

									</div>
									<div>
										This store cannot accept payments at this time.
									</div>
								</div>
							</div>
							<div className="flex justify-end items-center">
								<Button type="submit" className="disabled:bg-blue-900 disabled:cursor-not-allowed" disabled>
									Pay Now
								</Button>
							</div>
						</form>
					</div>
				</div>
				<div className="flex md:row-span-1 md:col-span-1"></div>
			</div>
		</main>
	);
};

export default CheckoutPage;
