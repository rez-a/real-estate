import Link from 'next/link';
import React from 'react';
import { FaRegCircle } from 'react-icons/fa';

const Category = ({ title, slug }) => {
  return (
    <li className="group">
      <Link
        className="bg-blue-100 p-0.5 px-3 group-hover:bg-blue-600 transition-all rounded"
        href="/"
      >
        <FaRegCircle className="inline text-xs font-semibold text-blue-600 group-hover:text-white transition-all ml-1" />
        <span className="text-xs text-blue-600 font-semibold group-hover:text-white transition-all">
          {title}
        </span>
      </Link>
    </li>
  );
};

export default Category;
