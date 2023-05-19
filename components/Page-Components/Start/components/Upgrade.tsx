/* eslint-disable require-jsdoc */
import * as React from "react";
import { Flex, Image, useTheme } from "@chakra-ui/react";
import { RiArrowRightCircleFill } from "react-icons/ri";
import Link from "next/link";

const Upgrade = () => {
  const theme = useTheme();

  const styles = {
    width: "fit-content",
    height: "10%",
    top: "0",
    right: "0",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "6px",
    boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(5px)",
    "-webkit-backdrop-filter": "blur(5px)",
    // border: "1px solid rgba(255, 255, 255, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.space[2],
    padding: theme.space[2],
    color: theme.colors.white,
    fontSize: theme.fontSizes.xl,
  };
  return (
    <Link href={"/create-music"}>
      <Flex
        margin={theme.space[0]}
        alignItems="center"
        justifyContent="center"
        height={"100%"}
        width={"100%"}
        padding={theme.space[8]}
        position={"relative"}
        cursor={"pointer"}
      >
        <Image
          width="100%"
          height="100%"
          borderRadius={theme.borderRadius.lg}
          src="/playlistImgs/img1.jpg"
          alt="Woman paying for a purchase"
        />
        <RiArrowRightCircleFill
          style={{
            position: "absolute",
            bottom: 10,
            right: theme.space[12],
            color: theme.colors.white,
          }}
          size={44}
        />
        <Flex style={styles} position={"absolute"}>
          {"Create your Music"}
        </Flex>
      </Flex>
    </Link>
  );
};

export default Upgrade;
