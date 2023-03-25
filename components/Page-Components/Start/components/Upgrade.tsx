/* eslint-disable require-jsdoc */
import * as React from "react";
import { Flex, Image, useTheme } from "@chakra-ui/react";
import { RiArrowRightCircleFill } from "react-icons/ri";
import Link from "next/link";

const Upgrade = () => {
  const theme = useTheme();
  return (
    <Link href={"/payments"}>
      <Flex
        margin={theme.space[0]}
        alignItems="flex-start"
        justifyContent="center"
        height={"40%"}
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
      </Flex>
    </Link>
  );
};

export default Upgrade;
