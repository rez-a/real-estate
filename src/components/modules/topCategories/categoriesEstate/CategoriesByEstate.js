import React from 'react';
import Category from './Category';

const CategoriesByEstate = () => {
  const allCategories = [
    {
      id: 1,
      title: 'خانه و ویلا',
      image: '/images/villa.png',
      slug: 'villa',
    },
    {
      id: 2,
      title: 'آپارتمان',
      image: '/images/apartment.png',
      slug: 'apartment',
    },
    {
      id: 3,
      title: 'مغازه',
      image: '/images/store.png',
      slug: 'store',
    },
    {
      id: 4,
      title: 'دفترکار',
      image: '/images/office.png',
      slug: 'office',
    },
  ];
  return (
    <ul className="flex items-center gap-8 mt-12">
      {allCategories.map((category) => (
        <Category {...category} key={category.id} />
      ))}
    </ul>
  );
};

export default CategoriesByEstate;
