import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button, Flex, Spinner, useTheme } from "@chakra-ui/react";
import { StyledContainer } from "../Profile/styles/pageStyles";
import useUser from "../../../swr/useUser";
import { useAuth0 } from "@auth0/auth0-react";
import useFriends from "../../../swr/useFriends";
import TextContainer from "../../utils/Texts/TextContainer";
import useGlobeData from "../../../swr/useGlobeData";
import FriendTile from "./components/FriendTile";
const Globe = dynamic(import("react-globe.gl"), { ssr: false });

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const FriendsPage = (): JSX.Element => {
  const theme = useTheme();
  const { user } = useAuth0();

  const { user: model } = useUser({ email: user?.email || "" });
  const { friends, isLoading, error } = useFriends({
    id: model?.fullUserPopulatedDetails?._id,
  });
  const getGlobeData = useGlobeData(model?.fullUserPopulatedDetails?._id);
  // console.log("ggwp ", getGlobeData.data);

  const [activeButton, setActiveButton] = useState("viewAll");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  if (isLoading) {
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
  console.log("hehe", getGlobeData?.data?.usersFriends);

  if (error || friends?.error) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"100vh"}
      >
        <TextContainer
          text={friends?.error || "Error loading data"}
          color={theme.colors.danger}
          size="1.2rem"
          align="center"
        />
      </Flex>
    );
  }

  return (
    <StyledContainer color="">
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
        width={"50%"}
        height={"100%"}
        overflow={"hidden"}
      >
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          // map the users friends to the globe
          pointsData={
            activeButton == "viewAll"
              ? getGlobeData?.data?.usersNotFriends?.map(
                  (friend: {
                    location: { coordinates: any[] };
                    name: any;
                  }) => ({
                    lat: friend.location.coordinates[1],
                    lng: friend.location.coordinates[0],
                    name: friend.name,
                    color: "red",
                    value: 1,
                  })
                )
              : getGlobeData?.data?.usersFriends?.map(
                  (friend: {
                    location: { coordinates: any[] };
                    name: any;
                  }) => ({
                    lat: friend.location.coordinates[1],
                    lng: friend.location.coordinates[0],
                    name: friend.name,
                    color: "red",
                    value: 1,
                  })
                ) || []
          }
        />
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent="flex-start"
        width={"50%"}
        height={"100%"}
        overflow={"hidden"}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          width={"100%"}
          height={"30%"}
          overflow={"hidden"}
        >
          <Button
            onClick={() => handleButtonClick("viewAll")}
            style={{
              height: "4vh",
              width: "30%",
              fontSize: theme.fontSizes.h3,
              background:
                activeButton === "viewAll"
                  ? theme.colors.ci[500]
                  : theme.colors.transparent,
              padding: theme.space[6],
              margin: theme.space[5],
            }}
          >
            View All
          </Button>
          {model && friends?.friends?.length !== 0 && (
            <Button
              onClick={() => handleButtonClick("viewFriends")}
              style={{
                height: "4vh",
                width: "30%",
                fontSize: theme.fontSizes.h3,
                background:
                  activeButton === "viewFriends"
                    ? theme.colors.ci[500]
                    : theme.colors.transparent,
                padding: theme.space[6],
                margin: theme.space[5],
              }}
            >
              View Friends
            </Button>
          )}
        </Flex>
        {activeButton == "viewAll" && (
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="flex-start"
            width={"70%"}
            height={"70%"}
            overflow={"scroll"}
          >
            {getGlobeData?.data?.usersNotFriends?.length !== 0 &&
              getGlobeData?.data?.usersNotFriends?.map(
                (user: {
                  _id: React.Key | null | undefined;
                  name: string;
                  address: string;
                  avatarImg: string;
                  avatarName: string;
                  isFriend: boolean;
                }) => (
                  <FriendTile
                    key={user._id}
                    name={user.name}
                    avatarName={user.avatarName}
                    status={"Online"}
                    location={user.address}
                    img={user.avatarImg}
                    isFriend={true}
                  />
                )
              )}
          </Flex>
        )}
        {activeButton == "viewFriends" && (
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="flex-start"
            width={"70%"}
            height={"70%"}
            overflow={"scroll"}
          >
            {getGlobeData?.data?.usersFriends?.length !== 0 &&
              getGlobeData?.data?.usersFriends?.map(
                (user: {
                  _id: React.Key | null | undefined;
                  name: string;
                  address: string;
                  avatarImg: string;
                  avatarName: string;
                  isFriend: boolean;
                }) => (
                  <FriendTile
                    key={user._id}
                    name={user.name}
                    avatarName={user.avatarName}
                    status={"Online"}
                    location={user.address}
                    img={user.avatarImg}
                    isFriend={false}
                  />
                )
              )}
          </Flex>
        )}
      </Flex>
    </StyledContainer>
  );
};

export default FriendsPage;
