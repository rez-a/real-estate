import Link from 'next/link';
import React from 'react';
import AuthStatus from './AuthStatus';

const Header = () => {
  return (
    <header className="flex items-start justify-between bg-blue-600 text-white p-4 rounded-lg mt-4">
      <ul className="flex items-center font-semibold text-lg gap-4 ">
        <li>
          <Link href="/files">آگهی ها</Link>
        </li>
        <li>
          <Link href="/">صفحه اصلی</Link>
        </li>
      </ul>
      <div>
        <AuthStatus />
      </div>
    </header>
  );
};

export default Header;
