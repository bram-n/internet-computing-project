import { Suspense } from 'react';
import Image from "next/image";
import SignupForm from '@/components/ui/signup-form';
import Link from "next/link";

export default function SignupPage() {
	return (
		<main className="w-full flex justify-center items-center p-6 my-12">
			<div className="max-w-[400px] w-full">
				<div className="flex justify-center items-center mb-8">
					<Image src="/logo.svg" alt="3AM Movies" width={150} height={150} />
				</div>
				<Suspense>
					<SignupForm />
				</Suspense>
			</div>
		</main>
	);
}