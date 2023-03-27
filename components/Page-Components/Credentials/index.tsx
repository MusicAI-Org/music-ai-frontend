/* eslint-disable require-jsdoc */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Image, useTheme } from "@chakra-ui/react";

const ImageCarousal = () => {
  const theme = useTheme();
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      style={{
        width: "60%",
        height: "100%",
        zIndex: "999",
        margin: theme.space[6],
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide
        style={{
          background: "transparent",
        }}
      >
        <Image
          src={"/credentialsImgs/img1.png"}
          height="10%"
          width="10%"
          align="self"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "transparent",
        }}
      >
        <Image
          src={"/credentialsImgs/img10.png"}
          height="10%"
          width="10%"
          align="self"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "transparent",
        }}
      >
        <Image
          src={"/credentialsImgs/img11.png"}
          height="10%"
          width="10%"
          align="self"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "transparent",
        }}
      >
        <Image
          src={"/credentialsImgs/img4.png"}
          height="10%"
          width="10%"
          align="self"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "transparent",
        }}
      >
        <Image
          src={"/credentialsImgs/img5.png"}
          height="10%"
          width="10%"
          align="self"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "transparent",
        }}
      >
        <Image
          src={"/credentialsImgs/img6.png"}
          height="10%"
          width="10%"
          align="self"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "transparent",
        }}
      >
        <Image
          src={"/credentialsImgs/img7.png"}
          height="10%"
          width="10%"
          align="self"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "transparent",
        }}
      >
        <Image
          src={"/credentialsImgs/img8.png"}
          height="10%"
          width="10%"
          align="self"
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "transparent",
        }}
      >
        <Image
          src={"/credentialsImgs/img9.png"}
          height="10%"
          width="10%"
          align="self"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousal;
