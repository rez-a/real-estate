'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import File from '@/components/shared/File';

import 'swiper/css';
import 'swiper/css/autoplay';

const Slider = ({ files }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
      autoplay={{ delay: 2000 }}
      loop={true}
      className="!py-10"
    >
      {files.map((file, index) => (
        <SwiperSlide key={index}>
          <File {...file} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
