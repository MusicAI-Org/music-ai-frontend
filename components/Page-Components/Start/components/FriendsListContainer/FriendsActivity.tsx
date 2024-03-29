/* eslint-disable require-jsdoc */
import { Flex, useTheme } from "@chakra-ui/react";
import * as React from "react";
import TextContainer from "../../../../utils/Texts/TextContainer";
import FriendsList from "./FriendsList";

const FriendsActivity = () => {
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
      <TextContainer text="Friends Activity" size="2rem" />
      <FriendsList />
    </Flex>
  );
};

export default FriendsActivity;
