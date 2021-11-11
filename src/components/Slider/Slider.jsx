import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Image, ImageWrapper } from './SliderStyled';

const Slider = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={120}
      slidesPerView={2}
      breakpoints={{
        460: { spaceBetween: 50 },
        560: { spaceBetween: -20 },
        1020: { slidesPerView: 3, spaceBetween: -10 },
      }}
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
