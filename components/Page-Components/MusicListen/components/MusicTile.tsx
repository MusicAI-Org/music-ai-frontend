import React from "react";
import { Box, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdThumbsUp } from "react-icons/io";
import { FiThumbsUp } from "react-icons/fi";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

type Props = {
  id?: string;
  genre: [];
  views: number;
  artist: string;
  coverImg: string;
  musicUrl: string;
  songname: string;
  albumname: string;
  likesCount: number;
  setMusicUrl: any;
};

const MusicTile = ({
  id,
  genre,
  artist,
  views,
  coverImg,
  musicUrl,
  songname,
  albumname,
  likesCount,
  setMusicUrl,
}: Props): JSX.Element => {
  const theme = useTheme();
  const [liked, setLiked] = React.useState(false);
  const handleClick = () => {
    setMusicUrl(musicUrl);
  };

  const styles = {
    lastIcons: {
      color: theme.colors.ci,
      fontSize: theme.fontSizes.xl2,
    },
    text: {
      color: theme.colors.ci,
      fontSize: theme.fontSizes.lg,
    },
    icons: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.xl,
    },
  };

  return (
    // <Link
    //   href={{
    //     pathname: `/video/${id}`,
    //     query: { name: heading },
    //   }}
    // >
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius={theme.borderRadius.md}
      overflow="hidden"
      color={theme.colors.defaultNotification}
      height="fit-content"
      width="100%"
      display="flex"
      cursor="pointer"
      onClick={handleClick}
    >
      <Flex
        width={"30%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={coverImg} alt={"img"} height="100%" width="100%" />
      </Flex>

      <Box padding={theme.space[3]} position="relative" width={"100%"}>
        <Flex
          fontWeight="bold"
          letterSpacing="wide"
          fontSize={theme.fontSizes.xl1}
          color={theme.colors.grayDarker}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex width={"60%"}>
            <Text fontWeight="bold" color={theme.colors.white}>
              {songname?.toUpperCase()}
            </Text>
          </Flex>
          <Flex
            width={"30%"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            cursor="pointer"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <IoMdThumbsUp style={styles.icons} />
            ) : (
              <FiThumbsUp style={styles.icons} />
            )}
            <Text>{likesCount}</Text>
          </Flex>
        </Flex>

        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Flex
            fontWeight="bold"
            letterSpacing="wide"
            fontSize={theme.fontSizes.sm}
            color={theme.colors.grayDarker}
          >
            Creator -&nbsp;
            <Text fontWeight="bold" color={theme.colors.warning}>
              @{artist}
            </Text>
          </Flex>
        </Box>
        <Flex
          fontWeight="bold"
          letterSpacing="wide"
          fontSize={theme.fontSizes.sm}
          color={theme.colors.grayDarker}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex width={"60%"}>
            Album -&nbsp;
            <Text fontWeight="bold" color={theme.colors.warning}>
              {albumname}
            </Text>
          </Flex>
          <Flex
            width={"30%"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <IoEyeSharp style={styles.lastIcons} />
            <Text style={styles.text}>{views}</Text>
          </Flex>
        </Flex>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Flex
            fontWeight="bold"
            letterSpacing="wide"
            fontSize={theme.fontSizes.sm}
            color={theme.colors.grayDarker}
          >
            Genre -&nbsp;
            <Text fontWeight="bold" color={theme.colors.ci}>
              {genre?.join(", ")}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
    // </Link>
  );
};
export default MusicTile;
