import React, { useState } from "react";
import {
  Button,
  Divider,
  Flex,
  FormLabel,
  Spinner,
  useTheme,
} from "@chakra-ui/react";
import { StyledContainer } from "./styles/pageStyles";
import AvatarImage from "./components/AvatarImage";
import AvatarName from "./components/AvatarName";
import StableDiffusionInfo from "./components/StableDiffusionInfo";
import EditName from "./components/Editables/EditName";
import EditDOB from "./components/Editables/DobEdit";
import EditPhoneNumber from "./components/Editables/PhoneNumberEdit";
import { ColorPicker } from "chakra-color-picker";
import EditAddress from "./components/Editables/AddressEdit";
import EditAvatarName from "./components/Editables/AvatarNameEdit";
import EditGenre from "./components/Editables/GenreEdit";
import GenerateProfilePic from "./components/Editables/GenerateProfilePic";
import { deleteModel, disableModel } from "../../../pages/api/user-api";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

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

const ProfilePage = () => {
  const { user } = useAuth0();
  const theme = useTheme();
  const router = useRouter();
  const [bannerColor, setBannerColor] = useState(theme.colors.ci);
  const [profilePicDiffusion, setProfilePicDiffusion] = useState("");
  const [isLoadingDeleteUtil, setIsLoadingDeleteUtil] = useState(false);
  const [isLoadingDisableUtil, setIsLoadingDisableUtil] = useState(false);

  let name = "";
  let role = "";
  let genre = [];
  let address = "";
  let avatarName = "";
  let phoneNumber = "";
  let dateOfBirth = "";
  let isDisabled = false;
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      name = parsedUser.user.name;
      role = parsedUser.user.role;
      genre = parsedUser.user.genre;
      address = parsedUser.user.address;
      avatarName = parsedUser.user.avatarName;
      phoneNumber = parsedUser.user.phoneNumber;
      dateOfBirth = parsedUser.user.dateOfBirth;
      isDisabled = parsedUser.user.isDisabled;
    }
  }

  const colorChangeHandler = (val: any) => {
    setBannerColor(val);
    console.log(val);
  };

  const handleDeleteAccount = async () => {
    // Retrieve the user data from local storage
    try {
      setIsLoadingDeleteUtil(true);
      const localStoredUser = localStorage.getItem("userData");
      if (localStoredUser !== null) {
        const parsedUser = JSON.parse(localStoredUser);
        const { _id } = parsedUser.user;

        const removeUser = await deleteModel({ _id, email: user?.email });
        if (removeUser) {
          localStorage.removeItem("userData");
        } else {
          console.log("Error deleting user");
        }
        router.push("/");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingDeleteUtil(false);
    }
  };

  const handleDisableAccount = async () => {
    // Retrieve the user data from local storage
    try {
      setIsLoadingDisableUtil(true);
      const localStoredUser = localStorage.getItem("userData");
      if (localStoredUser !== null) {
        const parsedUser = JSON.parse(localStoredUser);
        const { _id } = parsedUser.user;

        const disableUser = await disableModel({ _id, email: user?.email });
        const userData = {
          user: {
            ...parsedUser.user,
            isDisabled: disableUser.data.isDisabled,
          },
        };
        console.log("disableUser", disableUser);
        if (disableUser) {
          // userData.user.isDisabled = disableUser.data.isDisabled;
          if (typeof localStorage !== "undefined") {
            localStorage.setItem("userData", JSON.stringify(userData));
          }
        } else {
          console.log("Error disabling user");
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingDisableUtil(false);
    }
  };

  return (
    <StyledContainer color="">
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
        width={"50%"}
        height={"100%"}
      >
        {/* my account container here */}
        <Flex
          flexDirection={"column"}
          alignItems="center"
          justifyContent="flex-start"
          width={"90%"}
          height={"80vh"}
          backgroundColor={theme.colors.bgBox}
          borderRadius={theme.borderRadius.md}
          overflow="hidden"
        >
          {/* banner div */}
          <Flex height={"15%"} width={"100%"} backgroundColor={bannerColor}>
            <Flex justify="center" align="center" w="100%" h="100%">
              <ColorPicker onChange={colorChangeHandler} />
            </Flex>
          </Flex>
          {/* main div */}
          <Flex
            flexDirection={"column"}
            height={"100%"}
            width={"100%"}
            padding={theme.space[4]}
            background={theme.colors.bgBoxDarker}
          >
            {/*  */}
            {/* Heading div */}
            <Flex
              height={"20%"}
              width={"100%"}
              alignItems="center"
              justifyContent="center"
            >
              <Flex
                width={"50%"}
                height={"100%"}
                alignItems="center"
                justifyContent="space-between"
              >
                {/* Image div */}
                <AvatarImage profilePic={profilePicDiffusion} />

                {/* Name div */}
                <AvatarName role={role} name={name} />
              </Flex>
              {/* Edit Button div */}
              <Flex
                width={"50%"}
                height={"100%"}
                alignItems={"flex-start"}
                justifyContent={"flex-end"}
              >
                <StableDiffusionInfo />
              </Flex>
            </Flex>
            {/* Info div*/}
            <Flex
              height={"100%"}
              width={"100%"}
              flexDirection={"column"}
              alignItems="flex-start"
              justifyContent="space-between"
              padding={theme.space[4]}
              background={theme.colors.bgBox}
              borderRadius={theme.borderRadius.md}
            >
              <GenerateProfilePic setProfilePic={setProfilePicDiffusion} />
              <EditName name={name} />
              <EditDOB dob={dateOfBirth} />
              <EditPhoneNumber phoneNumber={phoneNumber} />
              <EditGenre genre={genre} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
        width={"50%"}
        height={"100%"}
        borderRadius={theme.borderRadius.md}
      >
        {/* password and authentication container */}
        <Flex
          flexDirection={"column"}
          alignItems="flex-start"
          justifyContent="space-around"
          width={"90%"}
          height={"70vh"}
          borderRadius={theme.borderRadius.md}
          overflow="hidden"
        >
          <Flex
            height={"20%"}
            width={"100%"}
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="space-between"
            borderRadius={theme.borderRadius.md}
          >
            <EditAvatarName avatarName={avatarName} />
          </Flex>
          <Divider
            style={{
              width: "100%",
              height: "1px",
              background: theme.colors.bgBoxLighter,
            }}
          />
          <Flex
            height={"20%"}
            width={"100%"}
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="space-between"
            borderRadius={theme.borderRadius.md}
          >
            <EditAddress address={address} />
          </Flex>
          <Divider
            style={{
              width: "100%",
              height: "1px",
              background: theme.colors.bgBoxLighter,
            }}
          />
          <Flex
            flexDirection={"column"}
            alignItems="space-around"
            justifyContent="space-around"
            width={"100%"}
            height={"30%"}
          >
            <FormLabel color={theme.colors.ci}>ACCOUNT REMOVAL</FormLabel>
            <FormLabel color={theme.colors.gray} fontSize={theme.fontSizes.md}>
              Disabling your account means you can recover it any time after
              taking this action
            </FormLabel>
            <Flex
              alignItems={"center"}
              justifyContent={"flex-start"}
              width={"100%"}
            >
              {!isDisabled && (
                <Button
                  colorScheme={theme.colors.ci}
                  style={{
                    background: theme.colors.danger,
                    color: theme.colors.white,
                    borderRadius: theme.borderRadius.sm,
                    border: "none",
                    padding: theme.space[2],
                    margin: `${theme.space[6]} 0`,
                    width: "30%",
                  }}
                  onClick={handleDisableAccount}
                  isLoading={isLoadingDisableUtil}
                  spinner={
                    <Spinner
                      thickness="2px"
                      speed="0.65s"
                      emptyColor={theme.colors.gray}
                      color={theme.colors.dangerBg}
                      size="md"
                    />
                  }
                >
                  DISABLE ACCOUNT
                </Button>
              )}
              {isDisabled && (
                <Button
                  colorScheme={theme.colors.ci}
                  style={{
                    background: theme.colors.warning,
                    color: theme.colors.white,
                    borderRadius: theme.borderRadius.sm,
                    border: "none",
                    padding: theme.space[2],
                    margin: `${theme.space[6]} 0`,
                    width: "30%",
                  }}
                  onClick={handleDisableAccount}
                  isLoading={isLoadingDisableUtil}
                  spinner={
                    <Spinner
                      thickness="2px"
                      speed="0.65s"
                      emptyColor={theme.colors.gray}
                      color={theme.colors.dangerBg}
                      size="md"
                    />
                  }
                >
                  ENABLE ACCOUNT
                </Button>
              )}
              <Button
                colorScheme={theme.colors.ci}
                style={{
                  background: theme.colors.transparent,
                  color: theme.colors.white,
                  borderRadius: theme.borderRadius.sm,
                  border: `1px solid ${theme.colors.danger}`,
                  padding: theme.space[2],
                  margin: `${theme.space[6]} 0 ${theme.space[6]} ${theme.space[4]}`,
                  width: "30%",
                }}
                onClick={handleDeleteAccount}
                isLoading={isLoadingDeleteUtil}
                spinner={
                  <Spinner
                    thickness="2px"
                    speed="0.65s"
                    emptyColor={theme.colors.gray}
                    color={theme.colors.dangerBg}
                    size="md"
                  />
                }
              >
                DELETE ACCOUNT
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </StyledContainer>
  );
};
export default ProfilePage;
