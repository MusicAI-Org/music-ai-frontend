import React, { useState } from "react";
import { Button, Flex, SimpleGrid, Spinner, useTheme } from "@chakra-ui/react";
import Footer from "../../utils/Footer/Footer";
import TextContainer from "../../utils/Texts/TextContainer";
import { StyledContainer } from "../Global/styles/styles";
import CommunityGroupTile from "./components/CommunityGroupTile";
import CreateCommunityModal from "./components/CreateCommunityModal";
import { getCommunityDataOfUser } from "../../../pages/api/community-api";
import UserCommunity from "../Community/UserCommunity";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

interface UserData {
  communities: {
    _id: string;
    name: string;
    members: Array<string>;
    description: string;
    imgUrl: string;
    imgAlt?: string;
  }[];
}
const MusicGroupsComponent = (): JSX.Element => {
  const theme = useTheme();
  const [userData, setUserData] = useState<UserData>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [showUserCommunities, setShowUserCommunities] = useState(false);
  const style = {
    height: "5vh",
    width: "60%",
    fontSize: theme.fontSizes.h4,
    background: theme.colors.transparent,
    marginRight: theme.space[6],
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const _id = "63e69f992307b30011108376";
      const data = await getCommunityDataOfUser(_id);
      console.log(data);
      setUserData(data);
      setShowUserCommunities(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <StyledContainer color={""}>
      {showUserCommunities && userData !== undefined ? (
        <Flex
          height={"90vh"}
          width={"100%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          direction={"column"}
          padding={theme.space[4]}
          paddingLeft={theme.space[9]}
          marginBottom={theme.space[9]}
        >
          <Flex
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <TextContainer
              text={"Your Communities"}
              size={theme.fontSizes.xl5}
            />
            <Flex
              width={"50%"}
              height={"fit-content"}
              alignItems={"flex-start"}
              justifyContent={"flex-end"}
            >
              <Button
                style={style}
                onClick={() => setShowUserCommunities(false)}
              >
                Go Back
              </Button>
            </Flex>
          </Flex>
          <SimpleGrid
            columns={[2, null, 3]}
            spacing="20px"
            height={"fit-content"}
            marginTop={theme.space[4]}
          >
            {userData !== undefined &&
              userData.communities.map((community: any) => (
                <UserCommunity
                  key={community._id}
                  _id={community._id}
                  name={community.name}
                  members={community.members.length}
                  description={community.description}
                  imageUrl={community.imgUrl}
                  imageAlt={community.imgAlt ? community.imgAlt : "image"}
                />
              ))}
          </SimpleGrid>
        </Flex>
      ) : (
        <Flex
          height={"fit-content"}
          width={"100%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          direction={"column"}
          padding={theme.space[4]}
          paddingLeft={theme.space[9]}
          marginBottom={theme.space[9]}
        >
          <Flex
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <TextContainer
              text={"Music Communities"}
              size={theme.fontSizes.xl5}
            />
            <Flex
              width={"50%"}
              height={"100%"}
              alignItems={"flex-start"}
              justifyContent={"flex-end"}
            >
              <Button
                style={style}
                onClick={handleGenerate}
                isLoading={isLoading}
                spinner={
                  <Spinner
                    thickness="2px"
                    speed="0.65s"
                    emptyColor={theme.colors.gray}
                    color={theme.colors.ci}
                    size="md"
                  />
                }
              >
                Your Communities
              </Button>
              <CreateCommunityModal />
            </Flex>
          </Flex>
          <SimpleGrid
            columns={[2, null, 3]}
            spacing="20px"
            height={"fit-content"}
            marginTop={theme.space[4]}
          >
            <CommunityGroupTile />
            <CommunityGroupTile />
            <CommunityGroupTile />
            <CommunityGroupTile />
            <CommunityGroupTile />
          </SimpleGrid>
        </Flex>
      )}

      <Footer />
    </StyledContainer>
  );
};
export default MusicGroupsComponent;
