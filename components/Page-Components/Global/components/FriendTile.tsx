import React from "react";
import { Flex, Image, Text, useTheme } from "@chakra-ui/react";
import ColoredLine from "../../../utils/Line/ColoredLine";

const FriendTile = ({
  name,
  status,
  location,
  img,
}: {
  name: string;
  status: string;
  location: string;
  img: string;
}) => {
  const theme = useTheme();

  return (
    <Flex
      direction="column"
      height="10vh"
      width="100%"
      alignItems={"center"}
      justifyContent={"space-between"}
      marginBottom="2vh"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"70%"}
        height={"10vh"}
        marginBottom="2vh"
      >
        <Flex width="18%" height="100%" borderRadius={"50%"}>
          <Image
            borderRadius={theme.borderRadius.half}
            src={img || "/playlistImgs/img1.jpg"}
            alt="Woman paying for a purchase"
          />
        </Flex>
        <Flex
          direction={"column"}
          width="80%"
          alignItems="flex-start"
          justifyContent={"space-between"}
          marginLeft={theme.space[4]}
        >
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            <Text
              fontWeight="bold"
              fontSize={theme.fontSizes.xl2}
              letterSpacing="wide"
              color={theme.colors.ci}
              width={"70%"}
            >
              {name}
            </Text>
            <Text fontSize={theme.fontSizes.sm} color={theme.colors.ci}>
              {status}
            </Text>
          </Flex>

          <Text
            my={1}
            display="block"
            fontSize="md"
            lineHeight="normal"
            fontWeight="semibold"
            color={theme.colors.gray}
          >
            {location}
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" width="10%">
        <ColoredLine color={theme.colors.ciDark} />
      </Flex>
    </Flex>
  );
};

export default FriendTile;
