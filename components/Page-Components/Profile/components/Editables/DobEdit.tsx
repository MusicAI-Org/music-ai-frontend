import React from "react";
import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const EditDOB = () => {
  const theme = useTheme();
  const styles = {
    input: {
      height: "100%",
      width: "100%",
      color: theme.colors.white,
      fontSize: theme.fontSizes.xl,
    },
  };

  return (
    <Flex
      flexDirection={"column"}
      alignItems="flex-start"
      justifyContent="center"
      height="30%"
      width="100%"
      color={theme.colors.white}
    >
      <FormLabel color={theme.colors.ci}>DATE OF BIRTH</FormLabel>
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        style={styles.input}
        _placeholder={{
          color: theme.colors.ciTrans15,
        }}
      />
    </Flex>
  );
};

export default EditDOB;
