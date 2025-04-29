'use server';
// https://supabase.com/docs/guides/auth/server-side/nextjs
import { createClient } from '@/app/supabase/server';
import { AuthError } from '@supabase/supabase-js';

declare module 'next-auth' {
  interface AuthError {
    type: string;
  }
}

export async function signUp(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    });

    if (error) {
      throw new AuthError(error.message, error.status);
    }

    return { data, error: null };
  } catch (error) {
    if (error instanceof AuthError) {
      return { data: null, error: error.message };
    }
    return { data: null, error: 'An unexpected error occurred' };
  }
}

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new AuthError(error.message, error.status);
    }

    return { data, error: null };
  } catch (error) {
    if (error instanceof AuthError) {
      return { data: null, error: error.message };
    }
    return { data: null, error: 'An unexpected error occurred' };
  }
}