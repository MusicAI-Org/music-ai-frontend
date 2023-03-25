import React from "react";
import {
  Flex,
  FormLabel,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const EditGenre = () => {
  const theme = useTheme();

  const styles = {
    pinInput: {
      width: "25%",
      height: "100%",
      border: `1px solid ${theme.colors.ciDark}`,
      color: theme.colors.white,
    },
  };

  return (
    <Flex
      flexDirection={"column"}
      alignItems="flex-start"
      justifyContent="flex-start"
      height="30%"
      width="100%"
      margin={`${theme.space[2]} 0`}
    >
      <FormLabel color={theme.colors.gray}>GENRE</FormLabel>
      <HStack width="100%" height="100%" marginTop={theme.space[3]}>
        <PinInput size="xl">
          {Array(4)
            .fill("")
            .map((_, i) => (
              <PinInputField key={i} style={styles.pinInput} />
            ))}
        </PinInput>
      </HStack>
    </Flex>
  );
};

export default EditGenre;
