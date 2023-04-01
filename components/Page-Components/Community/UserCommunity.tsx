import React from "react";
import Link from "next/link";
import {
  Badge,
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { MdGroup } from "react-icons/md";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const UserCommunity = ({
  _id,
  name,
  members,
  description,
  imageUrl,
  imageAlt,
}: any): JSX.Element => {
  const theme = useTheme();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const styles = {
    heading: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.xl2,
    },
    badgeStyles: {
      backgroundColor: theme.colors.successBg,
      color: theme.colors.white,
      padding: theme.space[2],
      borderRadius: theme.borderRadius.md,
    },
    stars: {
      width: "10%",
      height: "25%",
      background: "rgba(255, 255, 255, 0.2)",
      borderRadius: "16px",
      boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(5px)",
      "-webkit-backdrop-filter": "blur(5px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: theme.space[2],
      color: theme.colors.white,
      fontSize: theme.fontSizes.md,
    },
    lastIcons: {
      color: theme.colors.ci,
      fontSize: theme.fontSizes.xl2,
    },
    text: {
      color: theme.colors.ci,
      fontSize: theme.fontSizes.lg,
    },
    paragraph: {
      color: theme.colors.white,
    },
    joinGroupBtn: {
      height: "7vh",
      width: "100%",
      fontSize: theme.fontSizes.h3,
      color: theme.colors.ci,
      borderRadius: 0,
      backgroundColor: theme.colors.transparent,
    },
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius={theme.borderRadius.md}
      overflow="hidden"
      color={theme.colors.defaultNotification}
      height="fit-content"
      width="100%"
      paddingTop={theme.space[4]}
    >
      <Flex
        height={"100%"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          height="150px"
          width="150px"
          borderRadius={"50%"}
        />
      </Flex>

      <Box padding={theme.space[3]} position="relative">
        {/* name */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Badge variant="outline" style={styles.badgeStyles}>
            {name}
          </Badge>
          {/* Joining btn */}
          <Flex
            height={"100%"}
            width={"22%"}
            alignItems="center"
            justifyContent="space-around"
            padding={theme.space[3]}
          >
            <IoEyeSharp style={styles.lastIcons} />
            <Text style={styles.text}>{members}</Text>
          </Flex>
          <Flex style={styles.stars}>
            {4}
            <AiTwotoneStar color={theme.colors.white} />
          </Flex>
        </Box>
        {/* description */}
        <Flex
          flexDirection={"column"}
          alignItems="flex-start"
          justifyItems={"center"}
        >
          {/* description */}
          <Collapse startingHeight={20} in={show} style={styles.paragraph}>
            {description}
          </Collapse>
          <Button
            size="sm"
            onClick={handleToggle}
            mt="1rem"
            style={{
              backgroundColor: theme.colors.transparent,
              border: `1px solid ${theme.colors.ci}`,
              padding: theme.space[2],
            }}
          >
            Show {show ? "Less" : "More"}
          </Button>
        </Flex>
      </Box>
      {/* button box */}
      <Flex>
        <Link href={`/community/${_id}`}>
          <Button rightIcon={<MdGroup />} style={styles.joinGroupBtn}>
            Enter
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
export default UserCommunity;
