import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Image, ImageWrapper } from './SliderStyled';

const Slider = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      breakpoints={{ 900: { slidesPerView: 2 }, 1020: { slidesPerView: 3 } }}
    >
      {slides?.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <ImageWrapper>
            <Image src={slide} alt="Img" width="160" height="150" />
          </ImageWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(Slider);
