import React from "react";
import Text from "../../utils/Texts/TextContainer";
import CustomButton from "../../utils/Buttons/CustomButton";
import Slider from "./components/Slider";
import SmallText from "../../utils/Texts/SmallText";
import { Flex } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import FriendsActivity from "./components/FriendsListContainer/FriendsActivity";
// import useUser from "../../../swr/useUser";
// import CreateModel from "./components/CreateModel.tsx";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const PanelDivContainer = () => {
  const theme = useTheme();
  // const { user } = useUser({ email: "jain.paarth2608@gmail.com" });

  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      height="100vh"
      width="20vw"
      zIndex={1}
      p={0}
      mr={"1rem"}
    >
      {/* friend activity here */}
      <FriendsActivity />
      {/* <CreateModel /> */}
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        height="40vh"
        width="100%"
        marginBottom={"1rem"}
        borderRadius="10px"
        overflow="hidden"
        padding={"0.2rem"}
        backgroundColor={theme.colors.bgBoxLighter}
      >
        {/* top viewed playlist */}
        <Flex
          alignItems="flex-start"
          justifyContent="flex-start"
          width={"100%"}
          height="10vh"
          marginBottom={theme.space[2]}
        >
          <Flex
            direction={"column"}
            alignItems="flex-start"
            justifyContent="flex-start"
            width={"100%"}
            padding={`${theme.space[1]} ${theme.space[2]}`}
          >
            <SmallText
              text="Top Viewed"
              size="1.2rem"
              color={theme.colors.white}
            />
            <Text text="Playlists" size="2rem" />
          </Flex>
          <CustomButton text="See All" />
        </Flex>
        <Slider />
      </Flex>
    </Flex>
  );
};
export default PanelDivContainer;
