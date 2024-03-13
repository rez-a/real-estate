'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

const AuthStatus = () => {
  const { data } = useSession();

  if (data)
    return (
      <Link
        href="/dashboard"
        className="font-semibold bg-white text-blue-600 p-0.5 px-3 rounded"
      >
        <FaUser className="inline font-semibold" />
      </Link>
    );

  return (
    <Link
      href="/signup"
      className="font-semibold bg-white text-blue-600 p-0.5 px-3 rounded"
    >
      <FiLogIn className="inline font-semibold ml-1" />
      ورود
    </Link>
  );
};

export default AuthStatus;
