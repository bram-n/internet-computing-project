import { 
	// CircleUser, 
	// Package, 
	Wrench 
} from "lucide-react";
import Link from "next/link";

const AccountPage = () => {
	return (
		<main className="max-w-[80vw] md:max-w-5xl flex flex-col justify-center items-center mx-auto pt-6 px-6">
			<div className="w-full flex justify-start items-center mb-4">
				<div className="text-lg">Your Account</div>
			</div>
			<div className="flex flex-col items-center md:flex-row gap-5">
				{/* <div className="flex flex-row w-full md:w-1/3 border border-neutral-50 p-4 rounded-xl">
					<div className="flex justify-center items-center border border-neutral-50 rounded-full p-6">
						<Package />
					</div>
					<a href="/account" className="ml-2">
						<div>Your Orders</div>
						<p className="text-sm text-gray-100">
							View previous orders and purchase again
						</p>
					</a>
				</div> */}
				{/* <div className="flex flex-row w-full md:w-1/3 border border-neutral-50 p-4 rounded-xl">
					<div className="flex justify-center items-center border border-neutral-50 rounded-full p-6">
						<CircleUser />
					</div>
					<a href="/account" className="ml-2">
						<div>User Information</div>
						<p className="text-sm text-gray-100">
							View and update login information
						</p>
					</a>
				</div> */}
				<div className="flex flex-row w-full border border-neutral-50 py-8 px-4 rounded-xl">
					<div className="flex justify-center items-center border border-neutral-50 rounded-full p-6">
						<Wrench />
					</div>
					<Link href="/preferences" className="ml-2 flex flex-col justify-center items-start">
						<div>Preferences</div>
						<p className="text-sm text-gray-100">
							View and update your preferences
						</p>
					</Link>
				</div>
			</div>
			<div className="mb-10"></div>
		</main>
	);
};

export default AccountPage;
