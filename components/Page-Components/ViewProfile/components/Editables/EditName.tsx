import React from "react";
import { Flex, FormLabel, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

interface Props {
  name: string;
}

const EditName = (props: Props) => {
  const theme = useTheme();

  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      height="30%"
      width="50%"
    >
      <FormLabel color={theme.colors.ci} fontSize={theme.fontSizes.xl1}>
        NAME
      </FormLabel>
      <Text color={theme.colors.white} fontSize={theme.fontSizes.xl2} mt={2}>
        {props.name}
      </Text>
    </Flex>
  );
};

export default EditName;
