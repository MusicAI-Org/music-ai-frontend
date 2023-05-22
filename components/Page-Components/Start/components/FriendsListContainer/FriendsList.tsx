/* eslint-disable require-jsdoc */
import { Button, Container, Flex, Spinner, useTheme } from "@chakra-ui/react";
import * as React from "react";
import Card from "./Card";
import useFriends from "../../../../../swr/useFriends";
import { useAuth0 } from "@auth0/auth0-react";
import useUser from "../../../../../swr/useUser";
import TextContainer from "../../../../utils/Texts/TextContainer";
import Link from "next/link";

interface Friend {
  _id: string;
  avatarName: string;
  music: { name: string }[];
  role: string;
  yearOfJoining: string;
  avatarImg: string;
}

const FriendsList = () => {
  const theme = useTheme();
  const { user } = useAuth0();
  const { user: model } = useUser({ email: user?.email || "" });
  const { friends, isLoading, error } = useFriends({
    id: model?.fullUserPopulatedDetails?._id,
  });

  const style = {
    height: "5vh",
    fontSize: theme.fontSizes.h4,
    background: theme.colors.transparent,
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
  if (friends?.friends?.length === 0) {
    return (
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        width={"100%"}
        height={"100vh"}
      >
        <TextContainer
          text={
            friends?.error ||
            "Looks like you haven't met people across the globe, try out our features!"
          }
          color={theme.colors.warning}
          size="1.2rem"
          align="center"
        />
        <Link href="/globe" passHref>
          <Button style={style} marginRight={theme.space[6]}>
            Make friends
          </Button>
        </Link>
      </Flex>
    );
  }
  console.log("friends", friends);
  return (
    <Container
      w="100%"
      centerContent
      overflow={"hidden"}
      overflowY={"scroll"}
      backgroundColor="transparent"
      border={"none"}
      borderRadius={0}
      padding={theme.space[2]}
    >
      {friends?.friends?.length !== 0 &&
        friends?.friends
          ?.slice(0, 4)
          .map(function ({
            _id,
            avatarName,
            music,
            role,
            yearOfJoining,
            avatarImg,
          }: Friend) {
            return (
              <Card
                key={_id}
                name={avatarName}
                songName={music?.length === 0 ? role : music[0]?.name}
                yearOfJoining={yearOfJoining}
                avatarImg={avatarImg}
              />
            );
          })}
    </Container>
  );
};

export default FriendsList;
