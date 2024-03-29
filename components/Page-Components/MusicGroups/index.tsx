/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Flex,
  SimpleGrid,
  Spinner,
  Text,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import Footer from "../../utils/Footer/Footer";
import TextContainer from "../../utils/Texts/TextContainer";
import { StyledContainer } from "../Global/styles/styles";
import CommunityGroupTile from "./components/CommunityGroupTile";
import CreateCommunityModal from "./components/CreateCommunityModal";
import UserCommunity from "../Community/UserCommunity";
import useAllCommunity from "../../../swr/community/useAllCommunity";
import useCommunityOfUser from "../../../swr/community/useCommunityOfUser";

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

// eslint-disable-next-line react/prop-types
const MusicGroupsComponent = (): JSX.Element => {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoadingPageData, setLoadingPageData] = useState(false);

  const [userData, setUserData] = useState<UserData>();
  const [isLoading, setIsLoading] = useState(false);

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showUserCommunities, setShowUserCommunities] = useState(false);

  let userId = "";
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      userId = parsedUser.user._id;
    }
  }

  // useCommunityOfUser contains communities in which user is the owner and in which user is not owner but joined
  const { communityData } = useCommunityOfUser({
    _id: userId,
  });
  const style = {
    height: "5vh",
    fontSize: theme.fontSizes.h4,
    background: theme.colors.transparent,
  };

  const {
    communities,
    isLoading: isLoadingAllCommunities,
    error: errorAllCommunities,
  } = useAllCommunity({
    _id: userId,
  });

  if (isLoadingAllCommunities) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"100vh"}
      >
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor={theme.colors.gray}
          color={theme.colors.ci}
          size="md"
        />
      </Flex>
    );
  }
  if (errorAllCommunities) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"100vh"}
      >
        <TextContainer
          text={communities?.error || "Error loading data"}
          color={theme.colors.danger}
          size="1.2rem"
          align="center"
        />
      </Flex>
    );
  }

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      setUserData(communityData);
      setShowUserCommunities(true);
    } catch (error) {
      console.log(error);
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 2000); // hide the error message after 2 seconds
    } finally {
      setIsLoading(false);
    }
  };

  console.log("uucuuc", userData?.communities);

  return (
    <StyledContainer color={""}>
      {!showErrorMessage && showUserCommunities && userData !== undefined ? (
        <Flex
          minH={"90vh"}
          height={"fit-content"}
          width={"100%"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
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
                marginRight={theme.space[6]}
              >
                Go Back
              </Button>
            </Flex>
          </Flex>
          <SimpleGrid
            columns={[2, null, 3]}
            spacing="20px"
            height={"fit-content"}
            width="100%"
            marginTop={theme.space[4]}
          >
            {userData !== undefined &&
              userData?.communities?.map((community: any) => (
                <UserCommunity
                  key={community._id}
                  _id={community._id}
                  name={community.name}
                  createdBy={community.createdBy._id}
                  nextOwner={
                    community.members.length > 1 ? community.members[1]._id : ""
                  }
                  members={community.members.length}
                  description={community.description}
                  imageUrl={community.imgUrl}
                  imageAlt={community.imgAlt ? community.imgAlt : "image"}
                />
              ))}
          </SimpleGrid>
          {userData?.communities?.length === 0 && (
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              height={"70vh"}
              width={"100%"}
            >
              <Text
                align={"center"}
                size={theme.fontSizes.xl}
                color={theme.colors.warning}
              >
                You are not a member of any community yet.
              </Text>
              <Image
                src={"/credentialsImgs/img2.png"}
                alt={"No Communities"}
                width={300}
                height={300}
              />
            </Flex>
          )}
        </Flex>
      ) : (
        <Flex width="100%">
          {isLoadingPageData ? (
            <Flex
              height={"100vh"}
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Spinner
                thickness="2px"
                speed="0.65s"
                emptyColor={theme.colors.gray}
                color={theme.colors.ci}
                size="lg"
              />
            </Flex>
          ) : (
            <Flex
              minH={"90vh"}
              height={"fit-content"}
              width={"100%"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              direction={"column"}
              padding={theme.space[4]}
              paddingLeft={theme.space[9]}
              marginBottom={theme.space[9]}
            >
              {showErrorMessage && (
                <Text
                  backgroundColor={"#FEB2B2"}
                  padding={theme.space[3]}
                  borderRadius={theme.borderRadius.md}
                  fontWeight={"bold"}
                >
                  Something went wrong. Please try again later.
                </Text>
              )}
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
                    width="60%"
                    marginRight={theme.space[6]}
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
                  <CreateCommunityModal
                    id={userId || ""}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                  />
                </Flex>
              </Flex>
              {communities?.communities?.length != 0 ? (
                <SimpleGrid
                  columns={[2, null, 3]}
                  spacing="20px"
                  height={"fit-content"}
                  marginTop={theme.space[4]}
                >
                  {communities !== undefined &&
                    communities?.communities?.map((community: any) => (
                      <CommunityGroupTile
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
              ) : (
                <Flex
                  direction="column"
                  alignItems="center"
                  justifyContent="space-between"
                  width={"20%"}
                  height={"10vh"}
                  margin="auto"
                >
                  <TextContainer
                    text={"No Communities found"}
                    color={theme.colors.danger}
                    size="1.2rem"
                    align="center"
                  />
                </Flex>
              )}
            </Flex>
          )}
        </Flex>
      )}

      <Footer />
    </StyledContainer>
  );
};
export default MusicGroupsComponent;
