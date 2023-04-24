import React from "react";
import { Box, Image, Text, Flex, useTheme } from "@chakra-ui/react";

type Props = {
  name?: string;
  songName?: string;
  time?: string;
  yearOfJoining?: string;
  avatarImg: string;
};
const Card = ({ name, songName, yearOfJoining, avatarImg }: Props) => {
  const theme = useTheme();

  const styles = {
    width: "30%",
    height: "100%",
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
        width="20%"
        height="100%"
        borderRadius={theme.borderRadius.half}
        src={avatarImg || "/playlistImgs/img1.jpg"}
        alt="Woman paying for a purchase"
      />
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
            fontSize="lg"
            letterSpacing="wide"
            color={theme.colors.ci}
            width={"70%"}
          >
            {name}
          </Text>
          <Text
            fontSize={theme.fontSizes.sm}
            color={theme.colors.gray}
            style={styles}
          >
            {yearOfJoining}
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
