import React from "react";
import { Box, Flex, Image, useTheme } from "@chakra-ui/react";
import TextContainer from "../../../../utils/Texts/TextContainer";
import { AiTwotoneStar } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";

type Props = {
  id?: Number;
  songName?: string;
  by?: string;
  time?: string;
  stars?: string;
};
const Card = ({ id, songName, by, time, stars }: Props) => {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      w="45%"
      h="20%"
      marginRight={theme.space[4]}
      padding={0}
      cursor="pointer"
    >
      <Image
        width="20%"
        height="100%"
        borderRadius={theme.borderRadius.lg}
        src="https://picsum.photos/id/237/250/250"
        alt="Woman paying for a purchase"
      />
      <Flex width={"30%"} direction="column" marginLeft={theme.space[2]}>
        <TextContainer
          text={songName ? songName : ""}
          size={theme.fontSizes.xl}
        />
        <TextContainer
          text={by ? by : ""}
          color={theme.colors.grayBorderBox}
          size={theme.fontSizes.sm}
        />
      </Flex>
      <Flex
        width={"10%"}
        alignItems="center"
        height="100%"
        color={theme.colors.grayBorderBox}
      >
        {time}
      </Flex>

      <Flex
        color={theme.colors.white}
        height="100%"
        alignItems="center"
        justifyContent="center"
        width="20%"
      >
        {stars}
        <AiTwotoneStar color={theme.colors.white} />
      </Flex>
      <Flex
        width={"20%"}
        height="100%"
        alignItems="center"
        color={theme.colors.ciDark}
        _hover={{ color: theme.colors.ci }}
      >
        <BiDotsHorizontalRounded />
      </Flex>
    </Box>
  );
};

export default Card;
