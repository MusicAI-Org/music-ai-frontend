/* eslint-disable require-jsdoc */
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      style={{
        width: "100%",
        height: "100%",
        zIndex: "999",
        borderRadius: "10px",
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src={"/playlistImgs/img1.jpg"}
          height="100%"
          width="100%"
          layout="fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/playlistImgs/img2.jpg"}
          height="100%"
          width="100%"
          layout="fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/playlistImgs/img3.jpg"}
          height="100%"
          width="100%"
          layout="fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/playlistImgs/img4.jpg"}
          height="100%"
          width="100%"
          layout="fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/playlistImgs/img5.jpg"}
          height="100%"
          width="100%"
          layout="fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/playlistImgs/img1.jpg"}
          height="100%"
          width="100%"
          layout="fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/playlistImgs/img2.jpg"}
          height="100%"
          width="100%"
          layout="fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/playlistImgs/img3.jpg"}
          height="100%"
          width="100%"
          layout="fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"/playlistImgs/img4.jpg"}
          height="100%"
          width="100%"
          layout="fill"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
