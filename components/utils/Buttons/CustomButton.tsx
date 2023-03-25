/* eslint-disable require-jsdoc */
import * as React from "react";
import { Flex, Button } from "@chakra-ui/react";

type Props = {
  text: string;
  padding?: number;
  justifyContent?: string;
};

const CustomButton = ({ text, padding, justifyContent }: Props) => {
  return (
    <Flex
      alignItems="center"
      justifyContent={justifyContent ? justifyContent : "center"}
      width="50%"
      backgroundColor={"transparent"}
    >
      <Button
        style={{
          fontSize: "0.8rem",
          fontWeight: "bold",
          backgroundColor: "transparent",
        }}
      >
        {text}
      </Button>
    </Flex>
  );
};

export default CustomButton;
