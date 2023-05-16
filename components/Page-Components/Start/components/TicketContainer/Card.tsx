import React from "react";
import { Box, Image, Text, useTheme } from "@chakra-ui/react";

type Props = {
  src?: string;
  name?: string;
  songName?: string;
  time?: string;
};
const Card = ({ src, name, songName, time }: Props) => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      w="100%"
      h="100%"
      margin={theme.space[1]}
      padding={0}
      cursor="pointer"
      position={"relative"}
    >
      <Image
        width="100%"
        height="90%"
        borderRadius={theme.borderRadius.sm}
        src={src}
        alt="Woman paying for a purchase"
      />
      <Text
        backgroundColor={theme.colors.bgBoxLighter}
        padding={"2%"}
        borderRadius={theme.borderRadius.sm}
      >
        {name}
      </Text>
    </Box>
  );
};

export default Card;
