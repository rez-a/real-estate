import React from 'react';
import Slider from '@/components/swiper/Swiper';

const LatestFile = ({ files }) => {
  return (
    <section className="mt-20">
      <h2 className="font-bold text-blue-600 text-2xl text-center">
        آخرین فایل ها
      </h2>
      <Slider files={files} />
    </section>
  );
};

export default LatestFile;
