import React, { useState } from "react";
import {
  Button,
  Divider,
  Flex,
  IconButton,
  Text,
  useClipboard,
  useTheme,
} from "@chakra-ui/react";
import { FiThumbsUp } from "react-icons/fi";
import { IoEyeSharp } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { IoMdThumbsUp } from "react-icons/io";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const ClickTab = (): JSX.Element => {
  const theme = useTheme();
  //   const placeholder = "text to be copied...";
  //   const [value, setValue] = React.useState(placeholder);
  const [followed, setFollowed] = useState(false);
  const [liked, setLiked] = useState(false);
  const { onCopy, hasCopied } = useClipboard("");

  const styles = {
    icons: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.xl,
    },
    divider: {
      color: theme.colors.white,
      height: "60%",
    },
    lastIcons: {
      color: theme.colors.ci,
      fontSize: theme.fontSizes.xl,
    },
    text: {
      color: theme.colors.ci,
    },
  };
  return (
    <Flex
      height={"100%"}
      width={"100%"}
      borderRadius={theme.borderRadius.md}
      color={theme.colors.white}
      alignItems="center"
      justifyContent="space-around"
      background="rgba( 255, 255, 255, 0.25 )"
      //   boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      backdropFilter="blur( 12.5px )"
      border="1px solid rgba( 255, 255, 255, 0.18 )"
      padding={theme.space[2]}
      css={{
        "&::-webkit-backdrop-filter": {
          backdropFilter: "blur( 12.5px )",
        },
      }}
    >
      <Flex
        height={"100%"}
        width={"20%"}
        alignItems="center"
        justifyContent="space-around"
        padding={theme.space[3]}
      >
        <IoEyeSharp style={styles.lastIcons} />
        <Text style={styles.text}>234</Text>
      </Flex>
      <Divider orientation="vertical" style={styles.divider} />
      <Flex
        height={"100%"}
        width={"20%"}
        alignItems="center"
        justifyContent="space-around"
        padding={theme.space[4]}
        cursor="pointer"
        onClick={() => setLiked(!liked)}
      >
        {liked ? (
          <IoMdThumbsUp style={styles.icons} />
        ) : (
          <FiThumbsUp style={styles.icons} />
        )}
        <Text>23</Text>
      </Flex>
      <Divider orientation="vertical" style={styles.divider} />
      <Flex mb={2} cursor="pointer">
        <Button
          leftIcon={
            hasCopied ? (
              <TiTick style={styles.lastIcons} />
            ) : (
              <MdContentCopy style={styles.lastIcons} />
            )
          }
          onClick={onCopy}
          backgroundColor={theme.colors.transparent}
          color={theme.colors.ci}
          border={"none"}
        >
          {hasCopied ? "Copied!" : "Copy"}
        </Button>
      </Flex>
      <Divider orientation="vertical" style={styles.divider} />
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={
          followed ? (
            <FaUserFriends style={styles.lastIcons} />
          ) : (
            <AiOutlineUserAdd style={styles.lastIcons} />
          )
        }
        onClick={() => setFollowed(!followed)}
        backgroundColor={theme.colors.transparent}
        style={{
          padding: theme.space[4],
          border: "none",
          cursor: "pointer",
        }}
      />
    </Flex>
  );
};
export default ClickTab;
