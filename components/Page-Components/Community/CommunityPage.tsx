import React, { useState } from "react";
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
import { StyledContainer } from "../Global/styles/styles";
import TextContainer from "../../utils/Texts/TextContainer";
import MusicTile from "../MusicListen/components/MusicTile";
import Footer from "../../utils/Footer/Footer";
import Link from "next/link";
// import MusicTile from "../MusicListen/components/MusicTile";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const CommunityPage = (props: any): JSX.Element => {
  const theme = useTheme();
  const [url, setUrl] = useState("");
  // console.log("url", url);

  const handleStateUpdate = (currentUrl: string) => {
    setUrl(currentUrl);
  };

  console.log("pp", props.particularCommunityData?.communityData?.members);

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
          width={"70%"}
          height={"10vh"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"absolute"}
          bottom={"5vh"}
          display={"none"}
        >
          {url?.length != 0 && (
            <audio controls autoPlay>
              <source src={url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </Flex>
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
              <Text fontSize={theme.fontSizes.xl2} color={theme.colors.white}>
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
              <Text fontSize={theme.fontSizes.xl2} color={theme.colors.white}>
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
              <Text fontSize={theme.fontSizes.xl2} color={theme.colors.white}>
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
              <Text fontSize={theme.fontSizes.xl2} color={theme.colors.white}>
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
                (member: any) => (
                  <Wrap key={member._id} marginRight={"1vh"}>
                    <WrapItem>
                      <Link href={`/view-profile/${member._id}`} passHref>
                        <Avatar
                          as="a"
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
                      </Link>
                    </WrapItem>
                  </Wrap>
                )
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          width={"60%"}
          height={"100%"}
          direction={"column"}
        >
          <Text
            fontSize={theme.fontSizes.xl2}
            color={theme.colors.ci}
            marginTop={theme.space[4]}
            marginLeft={theme.space[4]}
          >
            Explore The Music Of Your Community!
          </Text>
          <Flex
            width={"100%"}
            height={"85%"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            padding={theme.space[5]}
            borderRadius={theme.borderRadius.md}
            overflowY={"scroll"}
          >
            <SimpleGrid
              columns={[4, null, 2]}
              spacing="20px"
              height={"fit-content"}
              marginTop={theme.space[4]}
              marginBottom={theme.space[9]}
            >
              {props.particularCommunityData?.communityData?.members?.map(
                (member: {
                  avatarName: string;
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
                      likes: [string];
                      dislikes: [string];
                    }
                  ];
                }) =>
                  member.music.map(
                    (ms: {
                      _id: string;
                      coverImg: string;
                      genre: [];
                      views: number;
                      musicUrl: string;
                      songname: string;
                      albumname: string;
                      likesCount: number;
                      likes: [string];
                      dislikes: [string];
                    }) => (
                      <MusicTile
                        id={ms._id}
                        key={ms._id}
                        songname={ms.songname}
                        genre={ms.genre}
                        artist={member.avatarName}
                        albumname={ms.albumname}
                        likesCount={ms.likesCount}
                        views={ms.views}
                        coverImg={ms.coverImg}
                        musicUrl={ms.musicUrl}
                        setMusicUrl={handleStateUpdate}
                        artistId={member._id} // Change to the appropriate property
                        likes={ms.likes}
                        dislikes={ms.dislikes}
                      />
                    )
                  )
              )}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default CommunityPage;
