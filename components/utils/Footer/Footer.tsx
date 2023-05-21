/* eslint-disable react/no-children-prop */
/* eslint-disable require-jsdoc */
import React from "react";
import styled from "styled-components";
import { Flex, useTheme } from "@chakra-ui/react";
import {
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import ColoredLine from "../Line/ColoredLine";
import Link from "next/link";

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50vh;
  width: 100%;
`;
const Footer = () => {
  const theme = useTheme();

  const iconStyles = {
    color: theme.colors.gray[500],
    marginLeft: theme.space[8],
    cursor: "pointer",
  };

  return (
    <Container
      style={{
        backgroundColor: theme.colors.bgBoxDarker,
        color: theme.colors.white,
        padding: `${theme.space[7]} ${theme.space[12]}`,
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"80%"}
      >
        <Flex
          width={"50%"}
          height={"100%"}
          direction="column"
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          padding={theme.space[5]}
        >
          <Flex
            width="100%"
            height="50%"
            alignItems={"center"}
            justifyContent={"flex-start"}
            marginBottom={theme.space[5]}
          >
            <FaTwitter size={30} style={iconStyles} />
            <FaDiscord size={30} style={iconStyles} />
            <FaGithub size={30} style={iconStyles} />
            <FaInstagram size={30} style={iconStyles} />
            <FaLinkedin size={30} style={iconStyles} />
            <FaFacebookF size={30} style={iconStyles} />
          </Flex>
          <Flex
            width="100%"
            height="50%"
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            padding={theme.space[8]}
          >
            <Link href="/about">
              <Flex
                fontSize={theme.fontSizes.xl}
                style={{
                  cursor: "pointer",
                }}
              >
                About Us
              </Flex>
            </Link>
            <Link href="/analytics">
              <Flex
                fontSize={theme.fontSizes.xl}
                style={{
                  cursor: "pointer",
                }}
              >
                Analytics
              </Flex>
            </Link>
            <Link
              href="https://github.com/MusicAI-Org/music-ai-frontend"
              target="_blank"
            >
              <Flex
                fontSize={theme.fontSizes.xl}
                style={{
                  cursor: "pointer",
                }}
              >
                Docs
              </Flex>
            </Link>
          </Flex>
        </Flex>
        <Flex width={"50%"} height={"100%"}></Flex>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"20%"}
        color={theme.colors.gray}
      >
        <AiOutlineCopyright size={24} /> 2022 Music.AI &nbsp;&nbsp;&nbsp;
        <ColoredLine color={theme.colors.ciDark} />
        &nbsp;&nbsp;&nbsp; Developed By{" "}
        <Link
          href="https://its-paarth7.vercel.app/"
          // open to another chrome tab
          target="_blank"
          style={{
            cursor: "pointer",
          }}
        >
          <span
            style={{
              color: theme.colors.ci,
              cursor: "pointer",
            }}
          >
            &nbsp;Paarth
          </span>
        </Link>
      </Flex>
    </Container>
  );
};

export default Footer;
