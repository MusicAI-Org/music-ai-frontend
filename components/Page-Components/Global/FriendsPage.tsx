import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Flex, Spinner, useTheme } from "@chakra-ui/react";
import { StyledContainer } from "../Profile/styles/pageStyles";
import useUser from "../../../swr/user/useUser";
import { useAuth0 } from "@auth0/auth0-react";
import useFriends from "../../../swr/useFriends";
import TextContainer from "../../utils/Texts/TextContainer";
import useGlobeData from "../../../swr/useGlobeData";
import FriendTile from "./components/FriendTile";
import SelectTab from "./components/SelectTab";
import useNearByFetch from "../../../swr/filters/useNearByFetch";
import useFavouriteMusicians from "../../../swr/filters/useFavouriteMusicians";
import useGenreSpecific from "../../../swr/filters/useGenreSpecific";
import useFriendsOfFriends from "../../../swr/filters/useFriendsOfFriends";
const Globe = dynamic(import("react-globe.gl"), { ssr: false });

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const FriendsPage = (): JSX.Element => {
  const theme = useTheme();
  const { user } = useAuth0();
  const [selected, setSelected] = useState(0);

  const { user: model } = useUser({ email: user?.email || "" });
  console.log("model", model);
  const { friends, isLoading, error } = useFriends({
    id: model?.fullUserPopulatedDetails?._id,
  });
  const getGlobeData = useGlobeData(model?.fullUserPopulatedDetails?._id);
  const nearByFetch = useNearByFetch({
    _id: model?.fullUserPopulatedDetails?._id,
    location: model?.fullUserPopulatedDetails?.location,
  });
  const favouriteMusicians = useFavouriteMusicians(
    model?.fullUserPopulatedDetails?._id
  );
  const genreSpecific = useGenreSpecific(model?.fullUserPopulatedDetails?._id);
  const friendsOfFriends = useFriendsOfFriends(
    model?.fullUserPopulatedDetails?._id
  );

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
  // console.log("hehe", getGlobeData?.data?.usersFriends);

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
            (selected === 0 &&
              getGlobeData?.data?.usersNotFriends?.map(
                (friend: { location: { coordinates: any[] }; name: any }) => ({
                  lat: friend.location.coordinates[1],
                  lng: friend.location.coordinates[0],
                  name: friend.name,
                  color: "red",
                  value: 1,
                })
              )) ||
            (selected === 1 &&
              getGlobeData?.data?.usersFriends?.map(
                (friend: { location: { coordinates: any[] }; name: any }) => ({
                  lat: friend.location.coordinates[1],
                  lng: friend.location.coordinates[0],
                  name: friend.name,
                  color: "red",
                  value: 1,
                })
              )) ||
            (selected === 2 &&
              nearByFetch?.data?.nearByUsers?.map(
                (friend: { location: { coordinates: any[] }; name: any }) => ({
                  lat: friend.location.coordinates[1],
                  lng: friend.location.coordinates[0],
                  name: friend.name,
                  color: "red",
                  value: 1,
                })
              )) ||
            (selected === 3 &&
              favouriteMusicians?.data?.filteredUsers?.map(
                (friend: { location: { coordinates: any[] }; name: any }) => ({
                  lat: friend.location.coordinates[1],
                  lng: friend.location.coordinates[0],
                  name: friend.name,
                  color: "red",
                  value: 1,
                })
              )) ||
            (selected === 4 &&
              genreSpecific?.data?.filteredUsers?.map(
                (friend: { location: { coordinates: any[] }; name: any }) => ({
                  lat: friend.location.coordinates[1],
                  lng: friend.location.coordinates[0],
                  name: friend.name,
                  color: "red",
                  value: 1,
                })
              )) ||
            (selected === 5 &&
              friendsOfFriends?.data?.friendsOfFriends?.map(
                (friend: { location: { coordinates: any[] }; name: any }) => ({
                  lat: friend.location.coordinates[1],
                  lng: friend.location.coordinates[0],
                  name: friend.name,
                  color: "red",
                  value: 1,
                })
              ))
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
        <SelectTab selected={selected} setSelected={setSelected} />

        {selected == 0 && (
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="flex-start"
            width={"70%"}
            height={"70%"}
            overflow={"auto"}
          >
            {getGlobeData?.data?.usersNotFriends?.length !== 0 &&
              getGlobeData?.data?.usersNotFriends?.map(
                (user: {
                  _id: string;
                  name: string;
                  address: string;
                  avatarImg: string;
                  avatarName: string;
                  isFriend: boolean;
                }) => (
                  <FriendTile
                    key={user._id}
                    friendId={user._id}
                    userId={model?.fullUserPopulatedDetails?._id}
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
        {selected === 1 && (
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="flex-start"
            width={"70%"}
            height={"70%"}
            overflow={"auto"}
          >
            {getGlobeData?.data?.usersFriends?.length !== 0 &&
              getGlobeData?.data?.usersFriends?.map(
                (user: {
                  _id: string;
                  name: string;
                  address: string;
                  avatarImg: string;
                  avatarName: string;
                  isFriend: boolean;
                }) => (
                  <FriendTile
                    key={user._id}
                    friendId={user._id}
                    userId={model?.fullUserPopulatedDetails?._id}
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
        {selected === 2 && (
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="flex-start"
            width={"70%"}
            height={"70%"}
            overflow={"auto"}
          >
            {nearByFetch?.data?.nearByUsers?.length !== 0 &&
              nearByFetch?.data?.nearByUsers?.map(
                (user: {
                  _id: string;
                  name: string;
                  address: string;
                  avatarImg: string;
                  avatarName: string;
                  isFriend: boolean;
                }) => (
                  <FriendTile
                    key={user._id}
                    friendId={user._id}
                    userId={model?.fullUserPopulatedDetails?._id}
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
        {selected === 3 && (
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="flex-start"
            width={"70%"}
            height={"70%"}
            overflow={"auto"}
          >
            {favouriteMusicians?.data?.filteredUsers?.length !== 0 &&
              favouriteMusicians?.data?.filteredUsers?.map(
                (user: {
                  _id: string;
                  name: string;
                  address: string;
                  avatarImg: string;
                  avatarName: string;
                  isFriend: boolean;
                }) => (
                  <FriendTile
                    key={user._id}
                    friendId={user._id}
                    userId={model?.fullUserPopulatedDetails?._id}
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
        {selected === 4 && (
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="flex-start"
            width={"70%"}
            height={"70%"}
            overflow={"auto"}
          >
            {genreSpecific?.data?.filteredUsers?.length !== 0 &&
              genreSpecific?.data?.filteredUsers?.map(
                (user: {
                  _id: string;
                  name: string;
                  address: string;
                  avatarImg: string;
                  avatarName: string;
                  isFriend: boolean;
                }) => (
                  <FriendTile
                    key={user._id}
                    friendId={user._id}
                    userId={model?.fullUserPopulatedDetails?._id}
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
        {selected === 5 && (
          <Flex
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="flex-start"
            width={"70%"}
            height={"70%"}
            overflow={"auto"}
          >
            {friendsOfFriends?.data?.friendsOfFriends?.length !== 0 &&
              friendsOfFriends?.data?.friendsOfFriends?.map(
                (user: {
                  _id: string;
                  name: string;
                  address: string;
                  avatarImg: string;
                  avatarName: string;
                  isFriend: boolean;
                }) => (
                  <FriendTile
                    key={user._id}
                    friendId={user._id}
                    userId={model?.fullUserPopulatedDetails?._id}
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
