'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import File from '@/components/shared/File';

import 'swiper/css';
import 'swiper/css/autoplay';

const Slider = (slides) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
      autoplay={{ delay: 2000 }}
      loop={true}
      className="!py-10"
    >
      {[...Array(10)].map((file, index) => (
        <SwiperSlide key={index}>
          <File />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
