import React from "react";
import { Box, Flex, Image, useTheme } from "@chakra-ui/react";
import TextContainer from "../../../../utils/Texts/TextContainer";
import { AiTwotoneStar } from "react-icons/ai";

type Props = {
  id?: Number;
  heading?: string;
  songsNumber?: string;
  stars?: string;
};
const Card = ({ id, heading, songsNumber, stars }: Props) => {
  const theme = useTheme();
  const styles = {
    width: "25%",
    height: "10%",
    top: "0",
    right: "0",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    "-webkit-backdrop-filter": "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.space[2],
    color: theme.colors.white,
    fontSize: theme.fontSizes.md,
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      w="100%"
      h="100%"
      marginRight={theme.space[4]}
      padding={0}
      cursor="pointer"
      position={"relative"}
    >
      <Image
        width="100%"
        height="90%"
        borderRadius={theme.borderRadius.lg}
        src="https://picsum.photos/id/237/250/250"
        alt="Woman paying for a purchase"
      />
      <TextContainer text={heading ? heading : ""} size={theme.fontSizes.xl} />
      <TextContainer
        text={songsNumber ? songsNumber : ""}
        color={theme.colors.gray}
        size={theme.fontSizes.sm}
      />
      <Flex style={styles} position="absolute">
        {stars}
        <AiTwotoneStar color={theme.colors.white} />
      </Flex>
    </Box>
  );
};

export default Card;
