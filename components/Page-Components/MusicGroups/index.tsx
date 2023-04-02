import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Button,
  Flex,
  SimpleGrid,
  Spinner,
  Text,
  useTheme,
} from "@chakra-ui/react";
import Footer from "../../utils/Footer/Footer";
import TextContainer from "../../utils/Texts/TextContainer";
import { StyledContainer } from "../Global/styles/styles";
import CommunityGroupTile from "./components/CommunityGroupTile";
import CreateCommunityModal from "./components/CreateCommunityModal";
import {
  getAllCommunities,
  getCommunityDataOfUser,
} from "../../../pages/api/community-api";
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
interface CommunityData {
  _id: string;
  name: string;
  members: Array<string>;
  description: string;
  imgUrl: string;
  imgAlt?: string;
}
// interface MusicGroupsComponentProps {
//   data: UserData;
// }
// eslint-disable-next-line react/prop-types
const MusicGroupsComponent = (): JSX.Element => {
  const theme = useTheme();
  const [pageData, setPageData] = useState<CommunityData[]>([]);
  const [isLoadingPageData, setLoadingPageData] = useState(false);

  const [userData, setUserData] = useState<UserData>();
  const [isLoading, setIsLoading] = useState(false);

  const [showErrorMessage, setShowErrorMessage] = useState(false);
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
      const _id = "63e69e20084d5200111c5e1d";
      const data = await getCommunityDataOfUser(_id);
      console.log(data);
      setUserData(data);
      setShowUserCommunities(true);
    } catch (error) {
      console.error(error);
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 2000); // hide the error message after 2 seconds
    } finally {
      setIsLoading(false);
    }
  };

  const getData = async () => {
    setLoadingPageData(true);
    try {
      const data = await getAllCommunities();
      setPageData(data.communities);
    } catch (error) {
      console.error(error);
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 2000); // hide the error message after 2 seconds
    } finally {
      setLoadingPageData(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledContainer color={""}>
      {!showErrorMessage && showUserCommunities && userData !== undefined ? (
        <Flex
          minH={"90vh"}
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
            width="100%"
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
          {userData.communities.length === 0 && (
            <Flex justifyContent={"center"} alignItems={"center"}>
              <TextContainer
                align={"center"}
                text={"You are not a member of any community yet."}
                size={theme.fontSizes.xl}
              />
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
        <>
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
              alignItems={"center"}
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
                {pageData !== undefined &&
                  pageData.map((community: any) => (
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
            </Flex>
          )}
        </>
      )}

      <Footer />
    </StyledContainer>
  );
};
export default MusicGroupsComponent;
