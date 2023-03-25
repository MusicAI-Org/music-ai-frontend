import React from "react";
import { Box, Image, Flex, useTheme } from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import TextContainer from "../../../../utils/Texts/TextContainer";
import { AiTwotoneStar } from "react-icons/ai";

type Props = {
  songName?: string;
  by?: string;
  stars?: string;
};

const Card = ({ songName, by, stars }: Props) => {
  const theme = useTheme();
  const styles = {
    width: "55%",
    height: "30%",
    top: "0",
    right: "-10px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    "-webkit-backdrop-filter": "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.colors.white,
    fontSize: theme.fontSizes.xxs,
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      w="100%"
      h="15vh"
      padding={theme.space[1]}
    >
      <Flex position={"relative"}>
        <Flex style={styles} position="absolute">
          {stars}
          <AiTwotoneStar color={theme.colors.white} />
        </Flex>
        <Image
          width="70px"
          height="70px"
          borderRadius={theme.borderRadius.half}
          src="https://picsum.photos/id/237/250/250"
          alt="Woman paying for a purchase"
        />
      </Flex>
      <Flex width={"50%"} direction="column" marginLeft={theme.space[2]}>
        <TextContainer
          text={songName ? songName : ""}
          size={theme.fontSizes.xl}
        />
        <TextContainer
          text={by ? by : ""}
          color={theme.colors.grayBorderBox}
          size={theme.fontSizes.sm}
        />
      </Flex>
      <Flex
        width={"20%"}
        height="100%"
        alignItems="center"
        color={theme.colors.ciDark}
        _hover={{ color: theme.colors.ci, cursor: "pointer" }}
      >
        <BiDotsHorizontalRounded />
      </Flex>
    </Box>
  );
};

export default Card;
