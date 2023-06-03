import React from "react";
import { Flex, Image, Text, useTheme } from "@chakra-ui/react";
import ColoredLine from "../../../utils/Line/ColoredLine";
import { AiOutlineUserAdd } from "react-icons/ai";
import { addFriends } from "../../../../pages/api/community-api";

const FriendTile = ({
  friendId,
  userId,
  name,
  avatarName,
  status,
  location,
  img,
  isFriend,
}: {
  friendId: string;
  userId: string;
  name: string;
  avatarName: string;
  status: string;
  location: string;
  img: string;
  isFriend: boolean;
}) => {
  const theme = useTheme();

  // call an api which has body of the id of user and friend
  const addFriendHandler = async () => {
    console.log("add friend");
    const data = await addFriends({ user1Id: userId, user2Id: friendId });
    console.log(data);
  };

  return (
    <Flex
      direction="column"
      height="fit-content"
      width="100%"
      alignItems={"center"}
      justifyContent={"space-between"}
      marginTop="2vh"
      marginBottom="2vh"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"70%"}
        height={"10vh"}
        marginBottom="2vh"
      >
        <Flex width="18%" height="100%" borderRadius={"50%"}>
          <Image
            borderRadius={theme.borderRadius.half}
            src={img || "/playlistImgs/img1.jpg"}
            alt="Woman paying for a purchase"
            height={"100%"}
            width={"100%"}
          />
        </Flex>
        <Flex
          direction={"column"}
          width="80%"
          alignItems="flex-start"
          justifyContent={"space-between"}
          marginLeft={theme.space[4]}
        >
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            <Text
              fontWeight="bold"
              fontSize={theme.fontSizes.xl2}
              letterSpacing="wide"
              color={theme.colors.ci}
              width={"70%"}
            >
              {avatarName}
            </Text>
            <Text fontSize={theme.fontSizes.sm} color={theme.colors.ci}>
              {!isFriend ? (
                <AiOutlineUserAdd
                  color={theme.colors.ci}
                  style={{
                    cursor: "pointer",
                    fontSize: "1.5rem",
                  }}
                  onClick={addFriendHandler}
                />
              ) : (
                status
              )}
            </Text>
          </Flex>
          <Text
            fontSize={theme.fontSizes.md}
            letterSpacing="wide"
            color={theme.colors.warning}
            width={"70%"}
          >
            @{name}
          </Text>
          <Text
            my={1}
            display="block"
            fontSize="md"
            lineHeight="normal"
            fontWeight="semibold"
            color={theme.colors.gray}
          >
            {location}
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" width="10%" marginTop="1vh">
        <ColoredLine color={theme.colors.ciDark} />
      </Flex>
    </Flex>
  );
};

export default FriendTile;
