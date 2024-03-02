import React from 'react';
import CategoriesByDealing from './categoriesByDealing/CategoriesByDealing';
import CategoriesByEstate from './categoriesEstate/CategoriesByEstate';

const TopCategories = () => {
  return (
    <section>
      <CategoriesByDealing />
      <CategoriesByEstate />
    </section>
  );
};

export default TopCategories;
