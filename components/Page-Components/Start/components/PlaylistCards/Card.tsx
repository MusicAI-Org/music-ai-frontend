import React from "react";
import { Box, Flex, Image, useTheme } from "@chakra-ui/react";
import TextContainer from "../../../../utils/Texts/TextContainer";
import Link from "next/link";

type Props = {
  id?: string;
  src?: string;
  heading?: string;
  channelTitle: string;
};
const Card = ({ id, src, heading, channelTitle }: Props) => {
  const theme = useTheme();
  const styles = {
    width: "fit-content",
    height: "10%",
    top: "0",
    right: "0",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "6px",
    boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    "-webkit-backdrop-filter": "blur(5px)",
    // border: "1px solid rgba(255, 255, 255, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.space[2],
    padding: theme.space[2],
    color: theme.colors.white,
    fontSize: theme.fontSizes.md,
  };
  return (
    <Link
      href={{
        pathname: `/video/${id}`,
        query: { name: heading },
      }}
    >
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
          src={src}
          alt="Woman paying for a purchase"
        />
        <TextContainer
          text={heading ? heading : ""}
          size={theme.fontSizes.md}
        />
        <Flex style={styles} position="absolute">
          {channelTitle}
        </Flex>
      </Box>
    </Link>
  );
};

export default Card;
