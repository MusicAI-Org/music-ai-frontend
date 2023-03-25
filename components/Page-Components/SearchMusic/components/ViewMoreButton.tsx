import { Button, Text, useTheme } from "@chakra-ui/react";
import React from "react";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const ViewMoreButton = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Button
      height="100%"
      width="10%"
      padding={theme.space[4]}
      backgroundColor={theme.colors.transparent}
    >
      <Text>View More</Text>
    </Button>
  );
};
export default ViewMoreButton;
