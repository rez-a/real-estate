import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IoIosHome } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa6';

const File = ({ title, address, price }) => {
  return (
    <article className="border border-blue-300 rounded-xl p-3 hover:rotate-2 transition-all">
      <div className="relative h-28 rounded-lg overflow-hidden">
        <Image
          alt="image"
          src="/images/default-image-cover.svg"
          fill
          sizes="20"
          className="object-cover"
          priority
        />
      </div>
      <h2 className="font-semibold mt-2 line-clamp-1">
        <IoIosHome
          size={25}
          className=" bg-blue-100 text-blue-600  rounded inline-flex p-1 ml-2"
        />
        {title}
      </h2>
      <p className="text-sm text-neutral-400 mt-3 line-clamp-1">
        <CiLocationOn className="inline ml-1 text-neutral-400" />
        {address}
      </p>
      <p className="text-sm text-neutral-700 mt-1">
        {Number(price).toLocaleString()}
        <span className="mr-1">تومان</span>
      </p>
      <Link
        className="font-semibold text-blue-600 flex justify-between items-center mt-3"
        href="/"
      >
        <span>مشاهده آگهی</span>
        <span>
          <FaArrowLeft />
        </span>
      </Link>
    </article>
  );
};

export default File;
