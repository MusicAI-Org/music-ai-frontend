import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, useTheme } from "@chakra-ui/react";

const SignUpButton = () => {
  const theme = useTheme();
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      style={{
        height: "5vh",
        width: "90%",
        fontSize: theme.fontSizes.h3,
        background: theme.colors.transparent,
        padding: theme.space[6],
        margin: theme.space[5],
      }}
      onClick={() => loginWithRedirect()}
    >
      Sign Up
    </Button>
  );
};

export default SignUpButton;
