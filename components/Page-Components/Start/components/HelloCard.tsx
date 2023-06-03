/* eslint-disable require-jsdoc */
import * as React from "react";
import { Box, Button, Image, useTheme } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import useUser from "../../../../swr/user/useUser";

const MultiActionAreaCard = () => {
  const theme = useTheme();
  const { user } = useAuth0();
  const { user: model } = useUser({ email: user?.email || "" });
  const property = {
    imageUrl: "img2.png",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };
  const style = {
    height: "7vh",
    width: "100%",
    fontSize: theme.fontSizes.h3,
    background: theme.colors.ciDark,
  };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      display={"flex"}
      flexDirection={"row"}
      width={"100%"}
      height={"100%"}
      position={"relative"}
      border="none"
    >
      <Image
        src={property.imageUrl}
        alt={property.imageAlt}
        h={"100%"}
        w={"80%"}
      />

      <Box p="6" position={"absolute"} top={"10px"} right={"10px"}>
        <Box fontSize={theme.fontSizes.h1} color={theme.colors.white}>
          Hello, {model?.fullUserPopulatedDetails?.avatarName} !
        </Box>
        <Box fontSize={theme.fontSizes.h3} color={theme.colors.white}>
          Welcome back to the platform!
        </Box>
      </Box>
      <Box position={"absolute"} bottom={"10px"} right={"10px"}>
        <Link href={"/streaming"}>
          <Button rightIcon={<FaPlay />} style={style}>
            Watch Stream
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default MultiActionAreaCard;
