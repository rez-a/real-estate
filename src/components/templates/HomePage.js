import React from 'react';
import TopCategories from '@/modules/topCategories/TopCategories';
import LatestFile from '@/modules/latestFiles/LatestFile';

const HomePage = ({ latestFile }) => {
  return (
    <div>
      <h2 className="text-blue-600 text-4xl font-bold text-center mt-12">
        سامانه خرید و اجاره ملک
      </h2>
      <TopCategories />
      <LatestFile files={latestFile} />
    </div>
  );
};

export default HomePage;
