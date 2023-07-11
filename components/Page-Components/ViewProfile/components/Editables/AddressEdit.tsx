import React from "react";
import { Flex, FormLabel, useTheme } from "@chakra-ui/react";

const EditAddress = (props: any) => {
  const theme = useTheme();

  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      height="100%"
      width="100%"
      margin={`${theme.space[2]} 0`}
    >
      <FormLabel color={theme.colors.ci} fontSize={theme.fontSizes.xl1}>
        ADDRESS
      </FormLabel>
      <Flex
        textAlign="left"
        height="50%"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        color={theme.colors.white}
        fontSize={theme.fontSizes.xl2}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "80%",
          }}
        >
          {props.address}
        </div>
      </Flex>
    </Flex>
  );
};

export default EditAddress;
