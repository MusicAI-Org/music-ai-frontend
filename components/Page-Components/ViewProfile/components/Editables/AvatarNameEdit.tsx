import React from "react";
import { Flex, FormLabel, useTheme } from "@chakra-ui/react";

const EditAvatarName = (props: any) => {
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
      <FormLabel color={theme.colors.gray}>AVATAR NAME</FormLabel>
      <Flex
        textAlign="center"
        height="50%"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        color={theme.colors.white}
        fontSize={theme.fontSizes.xl}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "80%",
          }}
        >
          {props.avatarName}
        </div>
      </Flex>
    </Flex>
  );
};

export default EditAvatarName;
