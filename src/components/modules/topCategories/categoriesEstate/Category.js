import Image from 'next/image';
import React from 'react';

const Category = ({ title, image, slug }) => {
  return (
    <div className="flex-1 shadow-xl rounded-xl p-4 group">
      <div className=" m-4 relative h-40 rounded-xl overflow-hidden">
        <Image
          src={image}
          fill={true}
          alt={title}
          objectFit="cover"
          className="group-hover:scale-110 transition-all"
        />
      </div>
      <h2 className="text-center text-blue-600 font-bold">{title}</h2>
    </div>
  );
};

export default Category;
