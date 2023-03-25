/* eslint-disable require-jsdoc */
import React from "react";
import Link from "next/link";
import {
  Flex,
  Text,
  Icon,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  useTheme,
} from "@chakra-ui/react";
import NavHoverBox from "./NavHoverBox";
import { useRouter } from "next/router";

const NavItem = ({ icon, title, description, active, navSize, route }: any) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Link href={route}>
      <Flex w="100%" mt="0.7rem">
        <Menu placement="right">
          <ChakraLink
            backgroundColor={
              router.pathname === route ? theme.colors.grayBorderBox : ""
            }
            color={
              router.pathname === route ? theme.colors.ci : theme.colors.white
            }
            p={3}
            borderRadius={8}
            _hover={{
              textDecor: "none",
              backgroundColor: theme.colors.grayBorderBox,
            }}
            w={"100%"}
            h={"7vh"}
          >
            <MenuButton w="100%" h="100%">
              <Flex
                alignItems="center"
                justifyContent={navSize == "small" ? "center" : ""}
              >
                <Icon
                  as={icon}
                  fontSize="md"
                  color={
                    router.pathname === route
                      ? theme.colors.ci
                      : theme.colors.white
                  }
                  ml={navSize == "small" ? 0 : 15}
                />
                <Text ml={15} display={navSize == "small" ? "none" : "flex"}>
                  {title}
                </Text>
              </Flex>
            </MenuButton>
          </ChakraLink>
          <MenuList
            backgroundColor={"transparent"}
            py={0}
            border="none"
            w={200}
            h={200}
            ml={5}
          >
            <NavHoverBox title={title} icon={icon} description={description} />
          </MenuList>
        </Menu>
      </Flex>
    </Link>
  );
};

export default NavItem;
