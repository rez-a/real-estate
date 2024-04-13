import React from 'react';
import Category from './Category';

const CategoriesByDealing = () => {
  const allCategories = [
    { id: 1, title: 'خرید', slug: 'buy' },
    { id: 2, title: 'فروش', slug: 'sale' },
    { id: 3, title: 'رهن', slug: 'mortgage' },
    { id: 4, title: 'اجاره', slug: 'rent' },
  ];
  return (
    <ul className="flex items-center gap-4 flex-wrap justify-center mt-8">
      {allCategories.map((category) => (
        <Category {...category} key={category.id} />
      ))}
    </ul>
  );
};

export default CategoriesByDealing;
