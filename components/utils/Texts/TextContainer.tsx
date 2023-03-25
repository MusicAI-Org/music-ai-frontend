/* eslint-disable require-jsdoc */
import * as React from "react";
import { Text, useTheme } from "@chakra-ui/react";
type Props = {
  text: string;
  size?: string;
  color?: string;
  width?: string;
  align?: any;
};

const TextContainer = ({ text, size, color, width, align }: Props) => {
  const theme = useTheme();
  return (
    <Text
      fontSize={size}
      textAlign={align ? align : "left"}
      ml={"0.3rem"}
      width={width ? width : "100%"}
      fontWeight="bold"
      color={color ? color : theme.colors.white}
    >
      {text}
    </Text>
  );
};

export default TextContainer;
