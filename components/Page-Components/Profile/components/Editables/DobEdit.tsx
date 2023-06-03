import React, { useState } from "react";
import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

interface Props {
  dob: string;
}
const EditDOB = (props: Props) => {
  const theme = useTheme();
  const [isDob, setDOB] = useState(props.dob);
  const handleDOBChange = (value: React.SetStateAction<string>) => {
    setDOB(value);
  };
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
        onChange={(e) => handleDOBChange(e.target.value)}
        value={isDob}
      />
    </Flex>
  );
};

export default EditDOB;
