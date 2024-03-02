import Link from 'next/link';
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

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
        <Link
          href="/signup"
          className="font-semibold bg-white text-blue-600 p-0.5 px-3 rounded"
        >
          <FiLogIn className="inline font-semibold ml-1" />
          ورود
        </Link>
      </div>
    </header>
  );
};

export default Header;
