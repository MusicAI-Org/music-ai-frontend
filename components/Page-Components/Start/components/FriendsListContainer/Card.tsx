import React from "react";
import { Box, Image, Text, Flex, useTheme } from "@chakra-ui/react";

type Props = {
  name?: string;
  songName?: string;
  time?: string;
  movieName?: string;
};
const Card = ({ name, songName, time, movieName }: Props) => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      w="100%"
      h="100%"
      padding={theme.space[2]}
      _hover={{
        backgroundColor: theme.colors.whiteAlpha[500],
        cursor: "pointer",
        borderRadius: theme.borderRadius.lg,
      }}
      overflow="hidden"
    >
      <Image
        width="17%"
        height="100%"
        borderRadius={theme.borderRadius.half}
        src="/playlistImgs/img1.jpg"
        alt="Woman paying for a purchase"
      />
      <Flex
        direction={"column"}
        width="60%"
        alignItems="flex-start"
        justifyContent={"space-around"}
        marginLeft={theme.space[4]}
      >
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="lg"
            letterSpacing="wide"
            color={theme.colors.gray}
          >
            {name}
          </Text>
          <Text fontSize={theme.fontSizes.sm} color={theme.colors.gray}>
            {time}
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
          {songName}
        </Text>
      </Flex>
    </Box>
  );
};

export default Card;
