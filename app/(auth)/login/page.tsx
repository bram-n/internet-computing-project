import LoginForm from '@/components/ui/login-form';
import { Suspense } from 'react';
import Image from "next/image";
 export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-full">
      <div className="mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 mt-24">
        <div className="flex h-20 w-full items-end p-3 md:h-36">
          <Image src="/logo.svg" alt="3AM Movies" width={100} height={100} />
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}