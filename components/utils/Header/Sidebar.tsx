/* eslint-disable require-jsdoc */
import React from "react";
import { Flex } from "@chakra-ui/react";
import { SiMusicbrainz } from "react-icons/si";
import NavItem from "./NavItem";
import { NavLinks } from "../../dummy-data/NavLinks";

const Sidebar = () => {
  const style = {
    color: "#fff",
    margin: "0.5rem",
    "&:hover": {
      cursor: "pointer",
    },
  };
  return (
    <Flex
      pos="sticky"
      top="0"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={"8px"}
      border="1px solid #e6e6e6"
      w={"75px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="0.5rem" flexDir="column" w="100%" alignItems={"center"} as="nav">
        <SiMusicbrainz size={44} style={style} />
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
