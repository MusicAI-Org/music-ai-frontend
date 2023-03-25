import React from "react";
import { Box, Image, Text, useTheme } from "@chakra-ui/react";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const YoutubeVideosTile = (): JSX.Element => {
  const theme = useTheme();
  const property = {
    imageUrl: "/playlistImgs/img1.jpg",
    imageAlt: "Rear view of modern home with pool",
    vidName: "Kings Never Die (ft. Gwen Stefani)",
    authorName: "Paarth Jain",
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
      display="flex"
      cursor="pointer"
    >
      <Image
        src={property.imageUrl}
        alt={property.imageAlt}
        height="100%"
        width="30%"
      />

      <Box padding={theme.space[3]} position="relative">
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text
            fontWeight="bold"
            letterSpacing="wide"
            fontSize={theme.fontSizes.md}
            color={theme.colors.white}
          >
            {property.vidName}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Text
            fontWeight="bold"
            letterSpacing="wide"
            fontSize={theme.fontSizes.sm}
            color={theme.colors.grayDarker}
          >
            {property.authorName}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default YoutubeVideosTile;
