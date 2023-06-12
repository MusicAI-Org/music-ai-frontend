import React from "react";
import { Box, Image, Text, Flex, useTheme } from "@chakra-ui/react";

type Props = {
  name?: string;
  avatarName?: string;
  songName?: string;
  time?: string;
  yearOfJoining?: string;
  avatarImg: string;
  isOnline: string;
  address: string;
  online: boolean;
};
const Card = ({
  name,
  avatarName,
  songName,
  yearOfJoining,
  avatarImg,
  isOnline,
  address,
  online,
}: Props) => {
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
        width="50px"
        height="50px"
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
            fontSize={theme.fontSizes.xl2}
            letterSpacing="wide"
            color={theme.colors.ci}
            width={"70%"}
          >
            {avatarName}
          </Text>
          <Text fontSize={theme.fontSizes.sm} color={theme.colors.ci}>
            {online == true ? (
              <Text color={theme.colors.warning}>Online</Text>
            ) : (
              "Offline"
            )}
          </Text>
        </Flex>
        <Text
          fontSize={theme.fontSizes.md}
          letterSpacing="wide"
          color={theme.colors.warning}
          width={"70%"}
        >
          @{name}
        </Text>
        <Text
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="semibold"
          color={theme.colors.gray}
        >
          {address.toLocaleUpperCase()}
        </Text>
      </Flex>
    </Box>
  );
};

export default Card;
