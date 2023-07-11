/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import { Flex, IconButton, useTheme } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { NavLinks } from "../../dummy-data/NavLinks";
import { useMediaQuery } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { SiMusicbrainz } from "react-icons/si";

const Sidebar = () => {
  const theme = useTheme();
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const [isVisible, setVisible] = useState(false);
  const margin = isSmallerThan768 ? "1vh" : "0.5vh";
  const style = {
    color: theme.colors.white,
    "&:hover": {
      cursor: "pointer",
    },
    margin: margin,
    background: theme.colors.transparent,
  };
  const style1 = {
    color: theme.colors.ci,
    margin: margin,
    background: theme.colors.transparent,
    transitionDuration: "all ease .3s ",
    "&:hover": {
      cursor: "pointer",
    },
  };
  const toggleVisible = () => {
    setVisible(!isVisible);
  };
  return (
    <Flex
      pos={isSmallerThan768 ? "absolute" : "sticky"}
      top={isSmallerThan768 ? "6vh" : "0"}
      h={isSmallerThan768 ? "90vh" : "95vh"}
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={"8px"}
      border={isSmallerThan768 ? "" : "1px solid #e6e6e6"}
      w={["45px", "55px", "65px", "75px"]}
      flexDir="column"
      justifyContent="flex-start"
      alignItems={"center"}
    >
      <IconButton
        aria-label="Toggle Sidebar"
        style={{
          background: "transparent",
          padding: "1vh",
          height: "6vh",
          width: "100%",
        }}
        icon={<FaBars size={22} style={style} />}
        onClick={toggleVisible}
        display={isSmallerThan768 ? "flex" : "none"}
      />
      <Flex
        display={!isSmallerThan768 || isVisible ? "flex" : "none"}
        p="0 0.5rem 0.5rem 0.5rem"
        mt={"1vh"}
        flexDir="column"
        w="100%"
        alignItems={"center"}
        border={isSmallerThan768 ? `1px solid ${theme.colors.ci}` : ""}
        background={
          isSmallerThan768 ? theme.colors.bgBox : "rgba(0, 0, 0, 0.0)"
        }
        borderRadius={theme.borderRadius.md}
        as="nav"
      >
        {!isSmallerThan768 && <SiMusicbrainz style={style1} size={44} />}
        {NavLinks.map((nav) => (
          <NavItem
            key={nav.id}
            navSize={nav.navSize}
            icon={nav.icon}
            title={nav.title}
            active={nav.active}
            description={nav.description}
            route={nav.route}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
