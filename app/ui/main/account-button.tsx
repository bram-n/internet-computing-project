'use client';

import { User } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/app/supabase/client';
import { useEffect, useState } from 'react';

export default function AccountButton() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
      setIsLoading(false);
    };

    checkSession();
  }, []);

  if (isLoading) {
    return (
      <div className="hidden border border-neutral-50 rounded-xl p-2 md:flex">
        <User />
      </div>
    );
  }

  return (
    <Link
      href={isLoggedIn ? '/account' : '/login'}
      className="hidden border border-neutral-50 rounded-xl p-2 md:flex"
    >
      <User />
    </Link>
  );
} 