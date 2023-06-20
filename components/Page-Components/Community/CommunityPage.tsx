import React from "react";
import {
  Avatar,
  AvatarBadge,
  Flex,
  Image,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
  useTheme,
} from "@chakra-ui/react";
import { StyledContainer } from "../Profile/styles/pageStyles";
import TextContainer from "../../utils/Texts/TextContainer";
// import MusicTile from "../MusicListen/components/MusicTile";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const CommunityPage = (props: any): JSX.Element => {
  const theme = useTheme();
  console.log("pp", props.particularCommunityData);

  const dateStr = props.particularCommunityData?.communityData?.createdAt;
  const date = new Date(dateStr);

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const userFriendlyDate = `${month} ${day}, ${year}, ${hour}:${minute}:${second}`;

  return (
    <StyledContainer color="">
      <Flex
        alignItems="flex-start"
        justifyContent="flex-start"
        width={"100%"}
        height={"100vh"}
        overflow={"hidden"}
        paddingTop={theme.space[4]}
      >
        <Flex
          alignItems={"flex-start"}
          direction={"column"}
          justifyContent={"flex-start"}
          height={"80%"}
          width={"40%"}
          borderRight={`1px solid ${theme.colors.ci}`}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            width={"95%"}
            height={"70%"}
            paddingBottom={"2vh"}
          >
            <Image
              src={props.particularCommunityData?.communityData?.imgUrl}
              alt="community"
              width={"100%"}
              height={"100%"}
              objectFit={"cover"}
              borderRadius={theme.borderRadius.md}
            />
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            width={"100%"}
            height={"100%"}
          >
            <TextContainer
              text={props.particularCommunityData?.communityData?.name}
              size={theme.fontSizes.xl5}
              color={theme.colors.ci}
            />
            <Flex
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              width={"100%"}
            >
              <Text fontSize={theme.fontSizes.xl2}>
                <span
                  style={{
                    color: theme.colors.warning,
                  }}
                >
                  Description :{" "}
                </span>
                {props.particularCommunityData?.communityData?.description}
              </Text>
            </Flex>
            <Flex
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              width={"100%"}
            >
              <Text fontSize={theme.fontSizes.xl2}>
                <span
                  style={{
                    color: theme.colors.warning,
                  }}
                >
                  Created By :{" "}
                </span>
                {props.particularCommunityData?.communityData?.createdBy?.name}
                <span
                  style={{
                    color: theme.colors.ci,
                    paddingLeft: theme.space[2],
                  }}
                >
                  {props.particularCommunityData?.communityData?.createdBy
                    ?.online
                    ? "(Online)"
                    : "(Offline)"}
                </span>
              </Text>
            </Flex>
            <Flex
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              width={"100%"}
            >
              <Text fontSize={theme.fontSizes.xl2}>
                <span
                  style={{
                    color: theme.colors.warning,
                  }}
                >
                  Created At :{" "}
                </span>
                {userFriendlyDate}
              </Text>
            </Flex>
            <Flex
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              width={"100%"}
              paddingBottom={"2vh"}
            >
              <Text fontSize={theme.fontSizes.xl2}>
                <span
                  style={{
                    color: theme.colors.warning,
                  }}
                >
                  Members :{" "}
                </span>
                {props.particularCommunityData?.communityData?.members?.length}
              </Text>
            </Flex>
            <Flex alignItems={"flex-start"} justifyContent={"flex-start"}>
              {props.particularCommunityData?.communityData?.members?.map(
                (member: any) => {
                  return (
                    <Wrap key={member._id} marginRight={"1vh"}>
                      <WrapItem>
                        <Avatar
                          name={member.avatarName}
                          src={member.avatarImg}
                          borderRadius={theme.borderRadius.half}
                          width={"50px"}
                          height={"50px"}
                          zIndex={199999999}
                        >
                          <AvatarBadge
                            boxSize="1.25em"
                            bg={member.online ? theme.colors.ci : "tomato"}
                            borderRadius={theme.borderRadius.half}
                          />
                        </Avatar>
                      </WrapItem>
                    </Wrap>
                  );
                }
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          width={"60%"}
          height={"100%"}
        >
          <Flex
            width={"100%"}
            height={"85%"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            marginTop={theme.space[4]}
            borderRadius={theme.borderRadius.md}
          >
            <SimpleGrid
              columns={[2, null, 3]}
              spacing="20px"
              height={"fit-content"}
              marginTop={theme.space[4]}
              marginBottom={theme.space[9]}
            >
              {/* {props.particularCommunityData?.communityData?.members?.map(
                (member: {
                  _id: string;
                  music: [
                    {
                      _id: string;
                      coverImg: string;
                      genre: [];
                      views: number;
                      artist: {
                        _id: string;
                        name: string;
                      };
                      musicUrl: string;
                      songname: string;
                      albumname: string;
                      likesCount: number;
                    }
                  ];
                }) => {
                  {
                    member?.music?.map(
                      (ms: {
                        _id: string;
                        coverImg: string;
                        genre: [];
                        views: number;
                        artist: {
                          _id: string;
                          name: string;
                        };
                        musicUrl: string;
                        songname: string;
                        albumname: string;
                        likesCount: number;
                      }) => {
                        return (
                          <MusicTile
                            id={ms._id}
                            key={ms._id}
                            songname={ms.songname}
                            genre={ms.genre}
                            artist={ms.artist.name}
                            albumname={ms.albumname}
                            likesCount={ms.likesCount}
                            views={ms.views}
                            coverImg={ms.coverImg}
                            musicUrl={ms.musicUrl}
                            setMusicUrl={""}
                          />
                        );
                      }
                    );
                  }
                }
              )} */}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </StyledContainer>
  );
};
export default CommunityPage;
