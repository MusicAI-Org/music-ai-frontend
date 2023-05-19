/* eslint-disable react/jsx-key */
/* eslint-disable require-jsdoc */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import useBasicData from "../../../../swr/useBasicData";
import { Flex, Image, Spinner, useTheme } from "@chakra-ui/react";
import TextContainer from "../../../utils/Texts/TextContainer";
import Link from "next/link";

const Slider = () => {
  const theme = useTheme();
  const { data, error, isLoading } = useBasicData();
  console.log("ghefbasdkfgb", data);

  if (isLoading) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"100vh"}
      >
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor={theme.colors.gray}
          color={theme.colors.ci}
          size="md"
        />
      </Flex>
    );
  }

  if (error || data?.error) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"100vh"}
      >
        <TextContainer
          text={data?.error || "Error loading data"}
          color={theme.colors.danger}
          size="1.2rem"
          align="center"
        />
      </Flex>
    );
  }
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
      {data?.mostPopularData?.map(
        (pop: {
          snippet: { thumbnails: { high: any }; title: string };
          id: string;
        }) => (
          <SwiperSlide
            style={{
              cursor: "pointer",
            }}
          >
            <Link
              href={{
                pathname: `/video/${pop.id}`,
                query: {
                  name: pop.snippet.title,
                },
              }}
            >
              <Image
                src={
                  pop
                    ? pop.snippet.thumbnails.high.url
                    : "https://i.ytimg.com/vi/1ZQ2wZQZQwQ/maxresdefault.jpg"
                }
                height="100%"
                width="100%"
              />
            </Link>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default Slider;
