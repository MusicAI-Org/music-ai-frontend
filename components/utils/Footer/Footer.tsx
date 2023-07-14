/* eslint-disable react/no-children-prop */
/* eslint-disable require-jsdoc */
import React from "react";
import styled from "styled-components";
import { Flex, useTheme, useMediaQuery } from "@chakra-ui/react";
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
  const [isSmallerThan1068] = useMediaQuery("(max-width: 1068px)");
  const [isSmallerThan568] = useMediaQuery("(max-width: 568px)");

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
          width={"100%"}
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
            justifyContent={!isSmallerThan1068 ? "flex-start" : "space-evenly"}
            marginBottom={!isSmallerThan1068 ? theme.space[5] : 0}
            flexWrap={"wrap"}
          >
            <FaTwitter size={!isSmallerThan568 ? 30 : 22} style={iconStyles} />
            <FaDiscord size={!isSmallerThan568 ? 30 : 22} style={iconStyles} />
            <FaGithub size={!isSmallerThan568 ? 30 : 22} style={iconStyles} />
            <FaInstagram
              size={!isSmallerThan568 ? 30 : 22}
              style={iconStyles}
            />
            <FaLinkedin size={!isSmallerThan568 ? 30 : 22} style={iconStyles} />
            <FaFacebookF
              size={!isSmallerThan568 ? 30 : 22}
              style={iconStyles}
            />
          </Flex>
          <Flex
            width="100%"
            height={!isSmallerThan1068 ? "50%" : "70%"}
            direction={!isSmallerThan1068 ? "column" : "row"}
            alignItems={"flex-start"}
            justifyContent={!isSmallerThan1068 ? "center" : "space-evenly"}
            padding={theme.space[8]}
            flexWrap={"wrap"}
            textAlign={"center"}
          >
            <Link href="/about">
              <Flex
                fontSize={theme.fontSizes.xl}
                style={{
                  cursor: "pointer",
                  color: theme.colors.warning,
                  padding: theme.space[2],
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
                  color: theme.colors.warning,
                  padding: theme.space[2],
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
                  color: theme.colors.warning,
                  padding: theme.space[2],
                }}
              >
                Docs
              </Flex>
            </Link>
          </Flex>
        </Flex>
        {/* <Flex width={"50%"} height={"100%"}></Flex> */}
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        width={"100%"}
        height={"20%"}
        color={theme.colors.gray}
        fontSize={theme.fontSizes.sm}
      >
        {!isSmallerThan568 && (
          <>
            <AiOutlineCopyright size={24} /> 2022 Music.AI &nbsp;&nbsp;&nbsp;
            <ColoredLine
              color={theme.colors.ciDark}
              width={!isSmallerThan1068 ? "60%" : "40%"}
            />
          </>
        )}
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
