import React from "react";
// import Image from "next/image";
import {
  //   Box,
  //   Center,
  //   Heading,
  //   Text,
  //   Stack,
  //   Avatar,
  //   useColorModeValue,
  Image,
  Flex,
  useTheme,
} from "@chakra-ui/react";
import ColoredLine from "../../../utils/Line/ColoredLine";

interface Props {
  height?: string;
  width?: string;
  color?: string;
}

const Card = (props: Props) => {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      height={props.height}
      width={props.width}
      backgroundColor={props.color}
      borderRadius={theme.borderRadius.lg}
      padding={theme.space[5]}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        height="30vh"
        width="100%"
        marginBottom={theme.space[5]}
      >
        <Image
          src="/playlistImgs/img1.jpg"
          width={"80px"}
          height={"80px"}
          borderRadius={theme.borderRadius.lg}
        />
      </Flex>
      <ColoredLine color={theme.colors.ciDark} width="100%" />
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        height="40vh"
        width="100%"
      ></Flex>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        height="30vh"
        width="100%"
      ></Flex>
    </Flex>
  );
};

export default Card;
