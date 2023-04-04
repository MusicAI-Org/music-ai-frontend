/* eslint-disable require-jsdoc */
import { Flex, useTheme } from "@chakra-ui/react";
import * as React from "react";
import TextContainer from "../../../../utils/Texts/TextContainer";

const CreateModel = () => {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      height="46vh"
      width="100%"
      background={theme.colors.bgBoxLighter}
      borderRadius="10px"
      padding={theme.space[1]}
      marginBottom={theme.space[4]}
    >
      <TextContainer text="Create a Role" size="1.5rem" />
    </Flex>
  );
};

export default CreateModel;
