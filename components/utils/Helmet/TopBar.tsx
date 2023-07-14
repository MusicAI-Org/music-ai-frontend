/* eslint-disable react/no-children-prop */
/* eslint-disable require-jsdoc */
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import {
  Avatar,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Icon,
  Spinner,
  useTheme,
  useMediaQuery,
  Link,
} from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";
import { TbSend } from "react-icons/tb";
import { AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import useUser from "../../../swr/user/useUser";
import { addFriends } from "../../../pages/api/community-api";
import { processMessage } from "../../../pages/api/useGoogleCustomSearch";

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100%;
  position: relative;
`;
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
  const localstoredUser = localStorage.getItem("userData");
  let userId = "";
  if (localstoredUser !== null) {
    const parsedUser = JSON.parse(localstoredUser);
    userId = parsedUser?.user?._id;
  }
  const [active, setActive] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search and ask chatGPT...");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholder((prevPlaceholder) =>
        prevPlaceholder === "Ask your queries to our web bot..."
          ? "Powered by Google Custom Search"
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
    console.log(userId, friendId);
    const data = await addFriends({
      user1Id: userId,
      user2Id: friendId,
    });
    console.log(data);
  };

  const [hasFriendRequests, setHasFriendRequests] = useState(false);
  useEffect(() => {
    setHasFriendRequests(
      model?.fullUserPopulatedDetails?.friendRequests?.length > 0
    );
  }, [model?.fullUserPopulatedDetails?.friendRequests]);

  // const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "",
      title: "",
      link: "",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  // const [showLoader, setShowLoader] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const modalHandler = () => {
    setShowModal(false);
  };

  const [isSmallerThan1068] = useMediaQuery("(max-width: 1068px)");
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const [isSmallerThan468] = useMediaQuery("(max-width: 468px)");
  const [isSmallerThan380] = useMediaQuery("(max-width: 380px)");
  // const [isSmallerThan968] = useMediaQuery("(max-width: 968px)");

  const sendMessage = async () => {
    console.log("hi from send");
    if (inputRef.current && inputRef.current.value) {
      // setShowLoader(true);
      setShowModal(true);
      const data = await processMessage(inputRef.current.value);

      // setShowLoader(false);

      if (Array.isArray(data.result) && data.result.length > 0) {
        const botMessages = data.result.map(
          (item: { snippet: any; title: any; link: any }) => ({
            message: item.snippet,
            type: "bot",
            title: item.title,
            link: item.link,
          })
        );
        console.log("btbtbtbtbt", botMessages);
        setMessages(botMessages);
      }
      inputRef.current.value = "";
      setActive(true);
      // setTyping(false);
    }
  };

  const openModalSmall = () => {
    setShowModal(true);
  };
  const modalHandlerSmallScreen = async () => {
    if (inputRef.current && inputRef.current.value) {
      // setShowLoader(true);
      const data = await processMessage(inputRef.current.value);

      // setShowLoader(false);
      if (Array.isArray(data.result) && data.result.length > 0) {
        const botMessages = data.result.map(
          (item: { snippet: any; title: any; link: any }) => ({
            message: item.snippet,
            type: "bot",
            title: item.title,
            link: item.link,
          })
        );
        console.log("btbtbtbtbt", botMessages);
        setMessages(botMessages);
      }
      inputRef.current.value = "";
      setActive(true);
    }
  };

  return (
    <Container
      style={{
        backgroundColor: theme.colors.bgDark,
      }}
      // onClick={handler}
    >
      {/* 1st */}
      <Flex
        margin={
          !isSmallerThan468 ? `0 ${theme.space[9]}` : `0 ${theme.space[3]}`
        }
        fontWeight="900"
        fontSize={
          !isSmallerThan768 ? "3rem" : !isSmallerThan380 ? "2rem" : "1.4rem"
        }
        fontFamily={theme.fonts.heading}
        color={theme.colors.white}
        width={!isSmallerThan768 ? "25%" : "40%"}
        alignItems="center"
        justifyContent={!isSmallerThan768 ? "center" : "flex-end"}
      >
        MUSIC.AI
      </Flex>

      {/* 2nd */}
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width={!isSmallerThan768 ? "40%" : "10%"}
        height="4vh"
        border={
          !isSmallerThan468
            ? `2px solid ${active ? theme.colors.ci : theme.colors.ciDark}`
            : "none"
        }
        padding={!isSmallerThan468 ? `0 ${theme.space[3]}` : `0`}
        borderRadius={theme.borderRadius.quarter}
      >
        {!isSmallerThan768 ? (
          <>
            <Input
              ref={inputRef}
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
              style={{
                zIndex: 1999999999999,
                cursor: "pointer",
              }}
              color={active ? theme.colors.ci : theme.colors.ciDark}
              onClick={sendMessage}
            />
          </>
        ) : (
          <RiSearch2Line
            size={20}
            style={{
              zIndex: 1999999999999,
              cursor: "pointer",
            }}
            color={active ? theme.colors.ci : theme.colors.ciDark}
            onClick={openModalSmall}
          />
        )}
        {showModal && (
          <Flex
            height="50vh"
            width="100%"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            zIndex="1999999999999"
            left="0px"
            // overflowY="scroll"
            borderRadius={theme.borderRadius.md}
          >
            <Flex
              position="relative"
              width={!isSmallerThan1068 ? "50%" : "100%"}
              height="100%"
              alignItems="center"
              justifyContent="center"
              borderRadius={theme.borderRadius.md}
              top="50vh"
            >
              {(isSmallerThan768 == false ? messages.length > 1 : true) ? (
                <Accordion
                  style={{
                    width: "100%",
                    borderRadius: theme.borderRadius.md,
                    color: theme.colors.white,
                    backgroundColor: theme.colors.bgBox,
                    border: "none",
                    padding: "1vh",
                    // overflowY: "scroll",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    position: "relative",
                  }}
                >
                  {isSmallerThan768 && (
                    <Flex
                      height="10vh"
                      alignItems="center"
                      justifyContent="space-evenly"
                      width="100%"
                    >
                      <Input
                        ref={inputRef}
                        placeholder={placeholder}
                        _placeholder={{
                          color: theme.colors.grayBorderBox,
                        }}
                        style={{
                          fontSize: theme.fontSizes.input,
                          width: "70%",
                          border: `1px solid ${theme.colors.ci}`,
                          borderRadius: theme.borderRadius.md,
                          padding: theme.space[3],
                        }}
                        outline="none"
                        border="none"
                        color={theme.colors.white}
                      />
                      <TbSend
                        size={20}
                        color={theme.colors.ci}
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={modalHandlerSmallScreen}
                      />
                    </Flex>
                  )}
                  <AiOutlineClose
                    style={{
                      position: "absolute",
                      right: "1vh",
                      top: "0.5vh",
                      height: "3vh",
                      width: "3vh",
                      borderRadius: theme.borderRadius.md,
                      color: theme.colors.ci,
                      backgroundColor: theme.colors.bgBox,
                      cursor: "pointer",
                    }}
                    onClick={modalHandler}
                  />
                  <Flex
                    width="100%"
                    height="80vh"
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    overflowY={"scroll"}
                  >
                    {messages?.map(
                      (message: {
                        message: string;
                        title: string;
                        link: string;
                      }) => (
                        <AccordionItem
                          key={message.title}
                          style={{
                            border: "none",
                            borderBottom: `1px solid ${theme.colors.grayDarker}`,
                            padding: "1vh",
                            marginTop: "2vh",
                            width: "100%",
                          }}
                          onClick={handler}
                        >
                          <h2>
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                style={{
                                  color: theme.colors.warning,
                                  fontSize: theme.fontSizes.xl,
                                }}
                              >
                                <Link
                                  // href={linkRef}
                                  target="_blank"
                                  href={message.link}
                                  style={{}}
                                >
                                  {message.title}
                                </Link>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel
                            pb={4}
                            style={{
                              background: theme.colors.bgBox,
                              color: theme.colors.white,
                            }}
                          >
                            {message.message}
                          </AccordionPanel>
                        </AccordionItem>
                      )
                    )}
                  </Flex>
                  {/* </Flex> */}
                </Accordion>
              ) : (
                <Flex
                  style={{
                    width: "100%",
                    borderRadius: theme.borderRadius.md,
                    color: theme.colors.white,
                    backgroundColor: theme.colors.bgBox,
                    border: "none",
                    padding: "1vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    position: "relative",
                  }}
                >
                  <Spinner
                    thickness="2px"
                    speed="0.65s"
                    emptyColor={theme.colors.gray}
                    color={theme.colors.ci}
                    size="md"
                  />
                </Flex>
              )}
            </Flex>
          </Flex>
        )}
      </Flex>

      {/* 3rd */}
      <Flex
        alignItems="center"
        justifyContent={!isSmallerThan468 ? "space-between" : "center"}
        margin={
          !isSmallerThan468 ? `0 ${theme.space[9]}` : `0 ${theme.space[3]}`
        }
        // width="35%"
        width={!isSmallerThan768 ? "35%" : "50%"}
      >
        <Link href={"/profile"}>
          <Flex
            overflow="hidden"
            width={"100%"}
            height="50px"
            alignItems="center"
            justifyContent="center"
            borderRadius={theme.borderRadius.md}
          >
            <Avatar
              name={user?.given_name}
              src={user?.picture}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: 0,
                objectFit: "cover",
              }}
            />
          </Flex>
        </Link>
        <Menu>
          <MenuButton
            as={Button}
            style={{
              background: theme.colors.transparent,
              height: "6vh",
              width: !isSmallerThan768 ? "25%" : "40%",
              // padding: theme.space[4],
              margin: theme.space[2],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <NotificationIcon
              as={IoMdNotifications}
              style={{
                backgroundColor: theme.colors.primary,
                margin: "0 auto",
              }}
              size={22}
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
                width: !isSmallerThan1068 ? "15vw" : "50vw",
                textAlign: "center",
                borderRadius: theme.borderRadius.md,
              }}
            >
              No Requests
            </MenuList>
          )}
        </Menu>
        {!isSmallerThan1068 ? (
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
        ) : (
          // <BiLogOut
          //   as={Button}
          //   size={22}
          //   style={{
          //     backgroundColor: theme.colors.primary,
          //     color: theme.colors.white,
          //   }}
          // />
          <BiLogOut
            // as={Button}s
            size={22}
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.white,
              height: "4vh",
              width: "25%",
            }}
          />
        )}
      </Flex>
    </Container>
  );
};

export default TopBar;
