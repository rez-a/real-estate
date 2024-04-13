import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Category = ({ title, image, slug }) => {
  return (
    <div className=" shadow-xl rounded-xl p-4 group relative">
      <div className=" m-4 relative h-40 rounded-xl overflow-hidden">
        <Image
          src={image}
          fill
          alt={title}
          priority
          sizes="20"
          className="group-hover:scale-110 transition-all object-cover"
        />
      </div>
      <h2 className="text-center text-blue-600 font-bold">{title}</h2>
      <Link
        href={{ pathname: '/files', query: { category: slug } }}
        className="absolute w-full h-full left-0 top-0"
      />
    </div>
  );
};

export default Category;
