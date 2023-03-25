import React from "react";
import { Box, Image, useTheme } from "@chakra-ui/react";

type Props = {
  name?: string;
  songName?: string;
  time?: string;
  movieName?: string;
};
const Card = ({ name, songName, time, movieName }: Props) => {
  const theme = useTheme();
  // const style = {
  //   position: "absolute",
  //   bottom: "0",
  //   height: "10vh",
  //   width: "100%",
  //   zIndex: "1",
  //   "backdrop-filter": "blur(3px) saturate(180%)",
  //   "-webkit-backdrop-filter": "blur3px) saturate(180%)",
  //   "background-color": "rgba(154, 156, 159, 0.5)",
  //   // "border-radius": `${theme.borderRadius.md}`,
  // };
  return (
    <Box
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      w="100%"
      h="100%"
      margin={theme.space[1]}
      padding={0}
      cursor="pointer"
      position={"relative"}
      // overflow="hidden"
    >
      <Image
        width="100%"
        height="90%"
        borderRadius={theme.borderRadius.sm}
        src="https://picsum.photos/id/237/250/250"
        alt="Woman paying for a purchase"
      />
      {/* <Flex style={style}></Flex> */}
    </Box>
  );
};

export default Card;
