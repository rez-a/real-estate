'use client';
import { signOut } from 'next-auth/react';
import React from 'react';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

const LogoutButton = () => {
  return (
    <button
      onClick={signOut}
      className="text-red-600 w-full text-start"
    >
      <FaArrowRightFromBracket className="inline ml-2" />
      خروج
    </button>
  );
};

export default LogoutButton;
