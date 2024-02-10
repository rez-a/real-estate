import React from 'react';
import CategoriesByDealing from './categoriesByDealing/CategoriesByDealing';
import CategoriesByEstate from './categoriesEstate/CategoriesByEstate';

const TopCategories = () => {
  return (
    <>
      <CategoriesByDealing />
      <CategoriesByEstate />
    </>
  );
};

export default TopCategories;
