import React from "react";
import { Flex, useTheme } from "@chakra-ui/react";
import Card from "./Card";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
type Props = {
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
};

const CardContainer = (props: Props) => {
  const theme = useTheme();
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      height="100%"
      width="100%"
    >
      <Card height="40vh" width="33%" color={theme.colors.grayBorderToggle} />
      <Card height="50vh" width="33%" color={theme.colors.ci} />
      <Card height="40vh" width="33%" color={theme.colors.secondary} />
    </Flex>
  );
};
export default CardContainer;
