/* eslint-disable react/no-children-prop */
/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Avatar, Button, Flex, Input, useTheme } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
`;
const TopBar = () => {
  const { logout, user } = useAuth0();
  console.log(user?.picture);
  const [active, setActive] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search and ask chatGPT...");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholder((prevPlaceholder) =>
        prevPlaceholder === "Ask your queries to our web bot..."
          ? "Powered by ChatGPT..."
          : "Ask your queries to our web bot..."
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  const theme = useTheme();
  const style = {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    fontSize: "1.5rem",
    cursor: "pointer",
    margin: "0.5rem",
    "&:hover": {
      color: theme.colors.gray[900],
    },
  };

  const handler = (e: React.MouseEvent<HTMLElement>) => {
    (e.target as HTMLInputElement).nodeName === "INPUT"
      ? setActive(true)
      : setActive(false);
  };

  return (
    <Container
      style={{
        backgroundColor: theme.colors.bgDark,
      }}
      onClick={handler}
    >
      <Flex
        margin={`0 ${theme.space[9]}`}
        fontWeight="900"
        fontSize="3rem"
        fontFamily={theme.fonts.heading}
        color={theme.colors.white}
      >
        MUSIC.AI
      </Flex>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="40%"
        border={`2px solid ${active ? theme.colors.ci : theme.colors.ciDark}`}
        padding={`0 ${theme.space[3]}`}
        borderRadius={theme.borderRadius.quarter}
      >
        <Input
          placeholder={placeholder}
          _placeholder={{
            color: theme.colors.grayBorderBox,
          }}
          style={{
            fontSize: theme.fontSizes.input,
          }}
          outline="none"
          border="none"
          color={theme.colors.white}
          onClick={handler}
        />
        <RiSearch2Line
          size={20}
          color={active ? theme.colors.ci : theme.colors.ciDark}
        />
      </Flex>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        margin={`0 ${theme.space[9]}`}
        width="20%"
      >
        <Link href={"/profile"}>
          <Flex
            display="inline-block"
            borderRadius="50%"
            overflow="hidden"
            width="50px"
            height="50px"
          >
            <Avatar
              name={user?.given_name}
              src={user?.picture}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 0,
                objectFit: "cover",
              }}
            />
          </Flex>
        </Link>
        <motion.div whileHover={{ scale: 1.1 }}>
          <IoMdNotifications size={24} style={style} />
        </motion.div>
        <Button
          style={{
            height: "4vh",
            width: "50%",
            fontSize: theme.fontSizes.h3,
            background: theme.colors.transparent,
            padding: theme.space[6],
            margin: theme.space[5],
          }}
          onClick={() => logout()}
        >
          Logout
        </Button>
      </Flex>
    </Container>
  );
};

export default TopBar;
