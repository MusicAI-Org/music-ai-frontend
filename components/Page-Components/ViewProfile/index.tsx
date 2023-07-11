import React, { useEffect, useState } from "react";
import { Button, Flex, Spinner, useTheme } from "@chakra-ui/react";
import AvatarImage from "./components/AvatarImage";
import AvatarName from "./components/AvatarName";
import EditName from "./components/Editables/EditName";
import EditDOB from "./components/Editables/DobEdit";
import EditGenre from "./components/Editables/GenreEdit";
import { StyledContainer } from "../Global/styles/styles";
import EditAddress from "./components/Editables/AddressEdit";
import { followUser, unfollowUser } from "../../../pages/api/user-api";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
// type Props = {
//   display?: string;
//   flexDirection?: string;
//   alignItems?: string;
//   justifyContent?: string;
// };

const ViewProfileUtil = (props: any) => {
  const { particularUser } = props;
  const [isLoadingFollow, setIsLoadingFollow] = useState(false);
  const [isLoadingUnfollow, setIsLoadingUnfollow] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false); // Initialize with false

  let _id = "";
  if (typeof localStorage !== "undefined") {
    const localStoredUser = localStorage.getItem("userData");
    if (localStoredUser !== null) {
      const parsedUser = JSON.parse(localStoredUser);
      _id = parsedUser.user._id;
    }
  }

  useEffect(() => {
    setIsFollowing(particularUser?.followers?.includes(_id)); // Update isFollowing state when particularUser or _id changes
  }, [particularUser, _id]);

  const handleFollow = async () => {
    try {
      setIsLoadingFollow(true);
      const data = await followUser({
        _id,
        follow_id: particularUser?._id,
      });
      setIsFollowing(data.success);
      console.log(data);
    } catch (e) {
    } finally {
      setIsLoadingFollow(false);
    }
  };

  const handleUnfollow = async () => {
    try {
      setIsLoadingUnfollow(true);
      const data = await unfollowUser({
        _id,
        unfollow_id: particularUser?._id,
      });
      setIsFollowing(!data.success);
      console.log(data);
    } catch (e) {
    } finally {
      setIsLoadingUnfollow(false);
    }
  };

  const theme = useTheme();
  return (
    <StyledContainer color="">
      <Flex
        height={"100vh"}
        width={"100%"}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Flex
          flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
          width={"50%"}
          height={"80vh"}
        >
          {/* my account container here */}
          <Flex
            flexDirection={"column"}
            alignItems="center"
            justifyContent="flex-start"
            width={"90%"}
            height={"85vh"}
            backgroundColor={theme.colors.bgBox}
            borderRadius={theme.borderRadius.md}
            overflow="hidden"
          >
            {/* banner div */}
            <Flex
              height={"30%"}
              width={"100%"}
              backgroundColor={theme.colors.ci}
            >
              <Flex justify="center" align="center" w="100%" h="100%"></Flex>
            </Flex>
            {/* main div */}
            <Flex
              flexDirection={"column"}
              height={"90%"}
              width={"100%"}
              padding={theme.space[4]}
              background={theme.colors.bgBoxDarker}
              justifyContent={"center"}
            >
              {/*  */}
              {/* Heading div */}
              <Flex
                height={"15%"}
                width={"100%"}
                alignItems="center"
                justifyContent="center"
              >
                <Flex
                  width={"100%"}
                  height={"100%"}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  {/* Image div */}
                  <AvatarImage avatarImg={particularUser?.avatarImg} />

                  {/* Name div */}
                  <AvatarName
                    avatarName={particularUser?.avatarName}
                    role={particularUser?.role}
                  />
                  {isFollowing && (
                    <Button
                      size="sm"
                      borderRadius={theme.borderRadius.md}
                      background={theme.colors.transparent}
                      height={"50%"}
                      width={"30%"}
                      onClick={handleUnfollow}
                      isLoading={isLoadingUnfollow}
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
                      Unfollow
                    </Button>
                  )}
                  {!isFollowing && (
                    <Button
                      size="sm"
                      borderRadius={theme.borderRadius.md}
                      background={theme.colors.transparent}
                      height={"50%"}
                      width={"30%"}
                      onClick={handleFollow}
                      isLoading={isLoadingFollow}
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
                      Follow
                    </Button>
                  )}
                </Flex>
              </Flex>
              {/* Info div*/}
              <Flex
                height={"15%"}
                width={"100%"}
                // flexDirection={"column"}
                alignItems="flex-start"
                justifyContent="space-between"
                padding={theme.space[4]}
                background={theme.colors.bgBox}
                borderRadius={theme.borderRadius.md}
              >
                <EditName name={particularUser?.name} />
                <EditDOB dob={particularUser?.dateOfBirth} />
              </Flex>
              <Flex
                height={"fit-content"}
                width={"100%"}
                // flexDirection={"column"}
                alignItems="flex-start"
                justifyContent="space-between"
                padding={theme.space[4]}
                background={theme.colors.bgBox}
                borderRadius={theme.borderRadius.md}
              >
                <EditAddress address={particularUser?.address} />
              </Flex>
              <Flex
                height={"20%"}
                width={"100%"}
                // flexDirection={"column"}
                alignItems="flex-start"
                justifyContent="space-between"
                padding={theme.space[4]}
                background={theme.colors.bgBox}
                borderRadius={theme.borderRadius.md}
              >
                <EditGenre genre={particularUser?.genre} />
              </Flex>
              <Flex
                height={"50%"}
                width={"100%"}
                direction={"column"}
                alignItems="flex-start"
                justifyContent="space-between"
                padding={theme.space[4]}
                background={theme.colors.bgBox}
                borderRadius={theme.borderRadius.md}
              >
                <Flex
                  color={theme.colors.ci}
                  fontSize={theme.fontSizes.xl1}
                  marginBottom={theme.space[2]}
                >
                  MUSICS
                </Flex>
                <Flex flexWrap={"wrap"}>
                  {particularUser?.music?.map((music: any, index: number) => (
                    <Flex
                      key={index}
                      height="100%"
                      width="fit-content"
                      alignItems="flex-start"
                      marginRight={theme.space[2]}
                      color={theme.colors.white}
                      justifyContent="flex-start"
                      fontSize={theme.fontSizes.xl2}
                      flex={"1 1 fit-content"}
                    >
                      <span
                        style={{
                          background: theme.colors.bgBoxLighter,
                          padding: theme.space[1],
                          borderRadius: theme.borderRadius.md,
                        }}
                      >
                        {music.songname}
                      </span>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </StyledContainer>
  );
};
export default ViewProfileUtil;
