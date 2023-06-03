/* eslint-disable react/no-children-prop */
/* eslint-disable require-jsdoc */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Avatar,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Icon,
  useTheme,
} from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import useUser from "../../../swr/user/useUser";
import { addFriends } from "../../../pages/api/community-api";

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
`;

/**
 * ${({ hasRequests }) =>
    hasRequests &&
    `
    animation: pulse 1.5s infinite;
    color: #EAB308;
  `}

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  &:hover {
    color: gray;
  }
 */
const NotificationIcon = styled(Icon)`
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0.5rem;
  color: white;
  transition: transform 0.2s ease-in-out;
`;

const TopBar = () => {
  const { logout, user } = useAuth0();
  const { user: model } = useUser({ email: user?.email || "" });
  console.log("from top", model?.fullUserPopulatedDetails?.friendRequests);
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

  const handler = (e: React.MouseEvent<HTMLElement>) => {
    (e.target as HTMLInputElement).nodeName === "INPUT"
      ? setActive(true)
      : setActive(false);
  };

  const addFriendHandler = async (friendId: string) => {
    console.log(model?.fullUserPopulatedDetails?._id, friendId);
    const data = await addFriends({
      user1Id: model?.fullUserPopulatedDetails?._id,
      user2Id: friendId,
    });
    console.log(data);
  };

  const [hasFriendRequests, setHasFriendRequests] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScaleFactor((prevScaleFactor) => (prevScaleFactor === 1 ? 1.5 : 1));
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Update the value of hasFriendRequests based on the friend requests in model
    setHasFriendRequests(
      model?.fullUserPopulatedDetails?.friendRequests?.length > 0
    );
  }, [model?.fullUserPopulatedDetails?.friendRequests]);

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
        width="25%"
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
        <Menu
        // style={{
        //   position: "absolute",
        //   zIndex: 1000000,
        //   right: "10px",
        //   top: "10vh",
        // }}
        >
          <MenuButton
            as={Button}
            style={{
              background: theme.colors.transparent,
              height: "6vh",
              padding: theme.space[4],
              margin: theme.space[2],
            }}
          >
            <NotificationIcon
              as={IoMdNotifications}
              // hasRequests={hasFriendRequests}
              // scaleFactor={scaleFactor}
              style={{
                backgroundColor: theme.colors.primary,
              }}
            />
          </MenuButton>
          {hasFriendRequests ? (
            <MenuList
              style={{
                background: theme.colors.bgDark,
                color: theme.colors.white,
                position: "absolute",
                zIndex: 1999999999999,
                right: "0px",
                top: "0px",
                height: "50vh",
                width: "15vw",
                borderRadius: theme.borderRadius.md,
              }}
            >
              {model?.fullUserPopulatedDetails?.friendRequests.map(
                (req: {
                  _id: string;
                  fromUser: string;
                  avatarImg: string;
                  name: string;
                  status: string;
                }) => (
                  <MenuItem
                    minH="48px"
                    width={"100%"}
                    style={{
                      display: "flex",
                      background: theme.colors.bgDark,
                      color: theme.colors.white,
                      height: "fit-content",
                      width: "fit-content",
                    }}
                    key={req._id}
                  >
                    <Image
                      boxSize="2rem"
                      src={req.avatarImg}
                      alt="Fluffybuns the destroyer"
                      mr="12px"
                      height="50px"
                      width="50px"
                      borderRadius={theme.borderRadius.half}
                    />
                    <Flex
                      direction="column"
                      style={{
                        width: "60%",
                      }}
                    >
                      <span
                        style={{
                          fontSize: theme.fontSizes.h3,
                          color: theme.colors.ci,
                        }}
                      >
                        {req.name}
                      </span>
                      <span
                        style={{
                          fontSize: theme.fontSizes.h5,
                          color: theme.colors.warning,
                          textTransform: "capitalize",
                        }}
                      >
                        {req.status}
                      </span>
                    </Flex>
                    <Flex
                      direction="column"
                      alignItems="flex-end"
                      style={{
                        width: "10%",
                      }}
                    >
                      <AiOutlineUserAdd
                        color={theme.colors.ci}
                        style={{
                          cursor: "pointer",
                          fontSize: "1.5rem",
                        }}
                        onClick={() => addFriendHandler(req.fromUser)}
                      />
                    </Flex>
                  </MenuItem>
                )
              )}
            </MenuList>
          ) : (
            <MenuList
              style={{
                background: theme.colors.bgDark,
                border: `1px solid ${theme.colors.ci}`,
                color: theme.colors.warning,
                position: "absolute",
                zIndex: 1999999999999,
                right: "0px",
                top: "0px",
                height: "5vh",
                width: "15vw",
                textAlign: "center",
                borderRadius: theme.borderRadius.md,
              }}
            >
              No Requests
            </MenuList>
          )}
        </Menu>
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
