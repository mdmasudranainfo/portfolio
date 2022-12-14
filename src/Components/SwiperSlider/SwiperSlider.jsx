import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperSlider = ({ data }) => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[400px]"
        >
          <SwiperSlide>
            <img className="" src={data.image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={data.image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={data.image3} alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default SwiperSlider;
