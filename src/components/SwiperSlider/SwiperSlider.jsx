"use client";
import React, { useState } from "react";
import styles from "./swiperSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const photos2 = [
  {
    image:
      "https://im.mashina.kg/tachka/images//0/e/c/0ecd8fe958b483862b2edd3fcff9fc60_640x480.jpg",
  },
  {
    image:
      "https://im.mashina.kg/tachka/images//b/c/e/bcec4482b6d1b833866d76e537c1d309_640x480.jpg",
  },
  {
    image:
      "https://im.mashina.kg/tachka/images//7/4/3/743418bf5cb2f40a5ca34306a031ac89_640x480.jpg",
  },
  {
    image:
      "https://im.mashina.kg/tachka/images//3/2/7/3271d665437bfc2083fe29fa2fbcba39_640x480.jpg",
  },
  {
    image:
      "https://im.mashina.kg/tachka/images//9/b/3/9b3cd5701c2a88dee4efde11cad4d67d_640x480.jpg",
  },
];
const SwiperSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={`${styles.car__images} big__slider`}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {photos2.map((photo, index) => (
          <SwiperSlide key={`${photo.image} ${index}`}>
            <img src={photo.image} alt={`Car ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {photos2.map((photo, index) => (
          <SwiperSlide key={`${photo.image} ${index}`}>
            <img src={photo.image} alt={`Car ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
