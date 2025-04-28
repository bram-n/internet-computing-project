import LoginForm from '@/components/ui/login-form';
import { Suspense } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="w-full flex justify-center items-center p-6 my-12">
      <div className="max-w-[400px] w-full">
        <div className="flex justify-center items-center mb-8">
          <Image src="/logo.svg" alt="3AM Movies" width={150} height={150} />
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}