import { Button, Text, useTheme, useMediaQuery, Link } from "@chakra-ui/react";
import React from "react";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const ViewMoreButton = (): JSX.Element => {
  const theme = useTheme();
  const [isSmallerThan1068] = useMediaQuery("(max-width: 1068px)");
  return (
    <Link
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer nofollow"
      style={{
        textDecoration: "none",
        width: !isSmallerThan1068 ? "10%" : "50%",
      }}
    >
      <Button
        height="100%"
        padding={theme.space[4]}
        backgroundColor={theme.colors.transparent}
        marginBottom={theme.space[5]}
      >
        <Text>View More</Text>
      </Button>
    </Link>
  );
};
export default ViewMoreButton;
