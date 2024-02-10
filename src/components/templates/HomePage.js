import React from 'react';
import TopCategories from '../modules/topCategories/TopCategories';

const HomePage = () => {
  return (
    <div>
      <h2 className="text-blue-600 text-4xl font-bold text-center mt-12">
        سامانه خرید و اجاره ملک
      </h2>
      <TopCategories />
    </div>
  );
};

export default HomePage;
