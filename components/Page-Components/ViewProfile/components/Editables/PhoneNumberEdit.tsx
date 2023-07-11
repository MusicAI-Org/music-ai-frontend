import React from "react";
import { Flex, FormLabel, Text, Input } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const EditPhoneNumber = () => {
  const theme = useTheme();

  return (
    <Flex
      // flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      height="30%"
      width="100%"
    >
      <FormLabel color={theme.colors.ci} width={"25%"}>
        PHONE NUMBER
      </FormLabel>
      <Flex
        justifyContent="center"
        height="50%"
        width="50%"
        alignItems="center"
        color={theme.colors.white}
        fontSize={theme.fontSizes.xl}
      >
        <Text
          style={{
            display: "flex",
            height: "100%",
            width: "80%",
          }}
        >
          +91-99973*****
        </Text>
        <Input
          style={{
            display: "none",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default EditPhoneNumber;
