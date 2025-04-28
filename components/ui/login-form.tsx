'use client';
 
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
 
export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
 
  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg border border-neutral-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl text-white`}>
          Please log in to continue
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-white"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-neutral-50 bg-black py-[9px] pl-10 text-sm outline-2 text-white placeholder:text-gray-400"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-white" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-white"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-neutral-50 bg-black py-[9px] pl-10 text-sm outline-2 text-white placeholder:text-gray-400"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400 peer-focus:text-white" />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button className="mt-4 w-full bg-white text-black hover:bg-gray-200" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto h-5 w-5" />
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <div className="text-center mt-4 text-sm text-white">
          New?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign up here
          </Link>
        </div>
      </div>
    </form>
  );
}