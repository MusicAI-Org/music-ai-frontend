import React from "react";
import { Box, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import CircleIcon from "./CircleIcon";
import Link from "next/link";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

type Props = {
  id?: string;
  src?: string;
  videoId: string;
  heading?: string;
  channelTitle?: string;
  publishTime: string;
};
const YoutubeVideosTile = ({
  id,
  src,
  videoId,
  heading,
  channelTitle,
  publishTime,
}: Props): JSX.Element => {
  const theme = useTheme();

  const givenTime = publishTime;
  const currentTime = new Date(); // Current time

  const givenDateTime = new Date(givenTime);
  const timeDifference = currentTime.getTime() - givenDateTime.getTime();

  // Convert the time difference to the desired format
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // console.log(
  //   `${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${
  //     seconds % 60
  //   } seconds ago`
  // );

  return (
    <Link
      href={{
        pathname: `/video/${videoId}`,
        query: { name: heading },
      }}
    >
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius={theme.borderRadius.md}
        overflow="hidden"
        color={theme.colors.defaultNotification}
        height="fit-content"
        width="100%"
        cursor="pointer"
      >
        <Image src={src} alt={"alt_image"} height="50%" width="100%" />

        <Box padding={theme.space[3]} position="relative">
          {/* name */}
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Text
              fontWeight="bold"
              letterSpacing="wide"
              fontSize={theme.fontSizes.xl}
              color={theme.colors.white}
            >
              {heading}
            </Text>

            <Flex
              height={"100%"}
              width={"100%"}
              alignItems="flex-start"
              justifyContent="flex-start"
              padding={`${theme.space[3]} 0`}
            >
              <Text
                fontWeight="bold"
                letterSpacing="wide"
                fontSize={theme.fontSizes.lg}
                color={theme.colors.ciDark}
              >
                {`@ ${channelTitle}`}
              </Text>
            </Flex>
            <Flex>
              <Text
                fontWeight="bold"
                letterSpacing="wide"
                fontSize={theme.fontSizes.md}
                color={theme.colors.ci}
              >
                <CircleIcon />{" "}
                {`${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${
                  seconds % 60
                } seconds ago`}
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
export default YoutubeVideosTile;
