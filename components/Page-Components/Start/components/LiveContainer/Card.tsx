import React from "react";
import { Box, Image, Text, Link, Flex, useTheme } from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";

type Props = {
  songName?: string;
  timeStamp?: string;
  type?: string;
};
const Card = ({ songName, timeStamp, type }: Props) => {
  const theme = useTheme();

  const style1 = {
    marginRight: "0.4rem",
    color: theme.colors.grayDarker,
  };
  const style2 = {
    color: theme.colors.grayDarker,
    borderRadius: theme.borderRadius.xs,
    padding: `${theme.space[1]} ${theme.space[2]}`,
    border: `1px solid ${theme.colors.ci}`,
  };

  return (
    <Box
      display={"flex"}
      w="100%"
      padding={theme.space[2]}
      _hover={{
        backgroundColor: theme.colors.whiteAlpha[500],
        cursor: "pointer",
        borderRadius: theme.borderRadius.lg,
      }}
    >
      <Image
        maxHeight="100px"
        width="40%"
        borderRadius={theme.borderRadius.lg}
        src="/playlistImgs/img1.jpg"
        alt="Woman paying for a purchase"
      />
      <Flex
        direction={"column"}
        width="60%"
        alignItems="center"
        justifyContent={"space-around"}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color={theme.colors.white}
        >
          {songName}
        </Text>
        <Flex
          alignItems={"flex-start"}
          justifyContent={"space-around"}
          width={"100%"}
        >
          <Link
            my={1}
            display="flex"
            alignItems={"center"}
            justifyContent={"space-between"}
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
            fontSize={theme.fontSizes.sm}
            color={theme.colors.grayDarker}
            _hover={{
              underline: "none",
              textDecoration: "none",
            }}
          >
            <FiClock style={style1} size={23} />
            {timeStamp}
          </Link>
          <Text fontSize="sm" style={style2}>
            {type}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
