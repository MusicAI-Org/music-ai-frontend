/* eslint-disable require-jsdoc */
import { Text, useTheme } from "@chakra-ui/react";
import * as React from "react";

type Props = {
  text: string;
  size?: string;
  width?: string;
  color?: string;
};
const SmallText = ({ text, size, width }: Props) => {
  const theme = useTheme();
  return (
    <Text width={width || ""} color={theme.colors.white}>
      {text}
    </Text>
  );
};

export default SmallText;
