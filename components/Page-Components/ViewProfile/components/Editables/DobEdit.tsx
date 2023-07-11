import React from "react";
import { Flex, FormLabel, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

interface Props {
  dob: string;
}

const EditDOB = (props: Props) => {
  const theme = useTheme();
  const dateString = props.dob;
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString();

  console.log(formattedDate);

  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      height="30%"
      width="50%"
      color={theme.colors.white}
    >
      <FormLabel fontSize={theme.fontSizes.xl1} color={theme.colors.ci}>
        DATE OF BIRTH
      </FormLabel>
      <Text fontSize={theme.fontSizes.xl2} color={theme.colors.white} mt={2}>
        {formattedDate}
      </Text>
    </Flex>
  );
};

export default EditDOB;
