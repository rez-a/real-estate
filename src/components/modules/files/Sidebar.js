'use client';

import Link from 'next/link';
import React from 'react';
import { FaFilter } from 'react-icons/fa6';
import { useSearchParams } from 'next/navigation';

const Sidebar = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('category');

  const allCategory = [
    {
      all: 'همه',
    },
    { villa: 'ویلا' },
    { apartment: 'آپارتمان' },
    { store: 'مغازه' },
    { office: 'شرکت' },
  ];

  return (
    <aside className="shadow-lg rounded-lg p-4">
      <h1>
        <FaFilter className="inline ml-1 text-blue-600" />
        <span className="font-bold">دسته بندی</span>
      </h1>
      <ul className="text-neutral-500 space-y-3 mt-6">
        {allCategory.map((category, index) => (
          <li key={index} className="min-w-40">
            <Link
              className={`w-full block hover:font-semibold ${
                search == Object.keys(category) ? 'font-semibold' : ''
              }`}
              href={{
                pathname: '/files',
                query: { category: Object.keys(category) },
              }}
            >
              {Object.values(category)}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
