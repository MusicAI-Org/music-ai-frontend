import React from "react";
import { Box, Image, Text, useTheme } from "@chakra-ui/react";
import Link from "next/link";

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

  return (
    <Link
      href={{
        pathname: `/video/${id}`,
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
        display="flex"
        cursor="pointer"
      >
        <Image src={src} alt={"img"} height="100%" width="30%" />

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
              {heading?.toUpperCase()}
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
              {description.length !== 0 ? description : heading}
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
export default YoutubeVideosTile;
