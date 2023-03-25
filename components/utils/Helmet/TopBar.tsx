/* eslint-disable react/no-children-prop */
/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Avatar, Flex, Input, useTheme } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import Link from "next/link";

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
  const variants = {
    rotate: { rotate: 360, transition: { duration: 5 } },
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
        width="10%"
      >
        <Link href={"/profile"}>
          <Avatar
            name="Oshigaki Kisame"
            src="https://bit.ly/broken-link"
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "50%",
              padding: theme.space[6],
              cursor: "pointer",
            }}
          />
        </Link>
        <motion.div whileHover={{ scale: 1.1 }}>
          <IoMdNotifications size={24} style={style} />
        </motion.div>
        <Link href={"/settings"}>
          <motion.div
            initial={{ rotate: 0 }}
            variants={variants}
            whileTap={{ rotate: 360 }}
          >
            <AiTwotoneSetting size={24} style={style} />
          </motion.div>
        </Link>
      </Flex>
    </Container>
  );
};

export default TopBar;
