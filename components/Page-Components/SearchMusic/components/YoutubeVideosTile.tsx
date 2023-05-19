import React from "react";
import { Box, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import CircleIcon from "./CircleIcon";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

type Props = {
  id?: string;
  src?: string;
  heading?: string;
  description: string;
};
const YoutubeVideosTile = ({
  id,
  src,
  heading,
  description,
}: Props): JSX.Element => {
  const theme = useTheme();
  const property = {
    imageUrl: "/playlistImgs/img1.jpg",
    imageAlt: "Rear view of modern home with pool",
    vidName:
      "How I created Music AI, connecting the music lovers across the globe!!!",
    authorName: "Paarth Jain",
    views: 34,
    timeOfUpload: "1 day",
  };

  return (
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
      <Image
        src={property.imageUrl}
        alt={property.imageAlt}
        height="200px"
        width="100%"
      />

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
            {property.vidName}
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
              {`@ ${property.authorName}`}
            </Text>
          </Flex>
          <Flex>
            <Text
              fontWeight="bold"
              letterSpacing="wide"
              fontSize={theme.fontSizes.md}
              color={theme.colors.ci}
            >
              {`${property.views} views `} <CircleIcon />{" "}
              {`${property.timeOfUpload} ago`}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
export default YoutubeVideosTile;
