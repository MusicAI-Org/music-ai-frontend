import React from "react";
import { BsDot } from "react-icons/bs";
import { Flex, useTheme } from "@chakra-ui/react";
import ImgMediaCard from "./components/HelloCard";
import AlignItemsList from "./components/LiveContainer/AlignItemsList";
import TextContainer from "../../utils/Texts/TextContainer";
import CustomButton from "../../utils/Buttons/CustomButton";
import TicketList from "./components/TicketContainer/TicketList.server";
// import {
//   RecentlyPlayedAndMostPopularDiv,
// } from "./styles/componentStyles";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
type Props = {
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
};

const ContentDivContainer = (props: Props) => {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      height="100vh"
      width="80vw"
      marginRight="1rem"
    >
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        height={"45vh"}
      >
        <Flex
          flexDirection={"column"}
          alignItems="flex-start"
          justifyContent="flex-start"
          width={"60%"}
          height={"100%"}
          backgroundColor={theme.colors.bgBoxLighter}
          borderRadius={theme.borderRadius.md}
        >
          <ImgMediaCard />
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems="center"
          justifyContent="flex-start"
          width={"40%"}
          height={"100%"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"flex-start"}
            width={"100%"}
            marginBottom={theme.space[2]}
          >
            <BsDot
              size={44}
              style={{
                color: theme.colors.danger,
              }}
            />
            <TextContainer text="Now In Live" size="1.2rem" />
            <CustomButton text="See All" />
          </Flex>
          <AlignItemsList />
        </Flex>
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        width={"100%"}
        height={"50vh"}
        marginTop={"1rem"}
        paddingTop={"1rem"}
      >
        <TextContainer text="Most Played" size="2rem" />
        <Flex
          padding={0}
          margin={0}
          marginBottom={"2%"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <TicketList />
        </Flex>
        <CustomButton text="See More" justifyContent="flex-end" />
      </Flex>
    </Flex>
  );
};
export default ContentDivContainer;
