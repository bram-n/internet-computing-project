"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { createClient } from "@/app/supabase/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function AccountDropdown() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	const checkSession = async () => {
		const supabase = createClient();
		const {
			data: { session },
		} = await supabase.auth.getSession();
		setIsLoggedIn(!!session);
		setIsLoading(false);
	};

	useEffect(() => {
		checkSession();
	}, []);

	const handleSignOut = async () => {
		try {
			const supabase = createClient();
			await supabase.auth.signOut();
			setIsLoggedIn(false);
			router.push("/");
			router.refresh();
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	if (isLoading) {
		return (
			<div className="hidden border border-neutral-50 rounded-xl p-2 md:flex">
				<User />
			</div>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="hidden border border-neutral-50 rounded-xl p-2 md:flex cursor-pointer">
					<User />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 bg-black border border-neutral-50 text-white">
				{isLoggedIn ? (
					<>
						<DropdownMenuLabel className="text-white">
							My Account
						</DropdownMenuLabel>
						<DropdownMenuSeparator className="bg-neutral-50" />
						<DropdownMenuItem
							className="text-white focus:bg-neutral-800 focus:text-white cursor-pointer"
							onClick={() => router.push("/account")}
						>
							Account
						</DropdownMenuItem>
						<DropdownMenuSeparator className="bg-neutral-50" />
						<DropdownMenuItem
							className="text-white focus:bg-neutral-800 focus:text-white cursor-pointer"
							onClick={handleSignOut}
						>
							Sign out
						</DropdownMenuItem>
					</>
				) : (
					<>
						{/* <DropdownMenuLabel className="text-white">Welcome</DropdownMenuLabel> */}
						{/* <DropdownMenuSeparator className="bg-neutral-50" /> */}
						<DropdownMenuItem
							className="text-white focus:bg-neutral-800 focus:text-white cursor-pointer"
							onClick={() => router.push("/login")}
						>
							Log in
						</DropdownMenuItem>
						<DropdownMenuItem
							className="text-white focus:bg-neutral-800 focus:text-white cursor-pointer"
							onClick={() => router.push("/signup")}
						>
							Sign up
						</DropdownMenuItem>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
