import { Button, Flex, Input, useTheme } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { TbSend } from "react-icons/tb";
import Footer from "../../utils/Footer/Footer";
import { StyledContainer } from "../Global/styles/styles";
import Message from "./components/Message";
import { processMessage } from "../../../pages/api/useGoogleCustomSearch";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const LearnMusic = (): JSX.Element => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message:
        "Hello, I am Music Bot. I am here to help you learn music. What would you like to learn?",
      type: "bot",
    },
  ]);
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = async () => {
    if (inputRef.current && inputRef.current.value) {
      const newMessage = {
        message: inputRef.current.value,
        type: "user",
      };

      const newMessages = [...messages, newMessage];
      setMessages(newMessages);
      inputRef.current.value = "";

      setTyping(true);
      const data = await processMessage(newMessage.message);
      console.log("data", data);

      if (Array.isArray(data.result) && data.result.length > 0) {
        const botMessages = data.result.map(
          (item: { snippet: any; title: any; link: any }) => ({
            message: item.snippet,
            type: "bot",
            title: item.title,
            link: item.link,
          })
        );
        const updatedMessages = [...newMessages, ...botMessages];
        setMessages(updatedMessages);
      }

      setTyping(false);
    }
  };

  return (
    <StyledContainer color={""}>
      <Flex
        height={"fit-content"}
        width={"100%"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        direction={"column"}
        padding={theme.space[4]}
        paddingLeft={theme.space[9]}
        marginBottom={theme.space[9]}
      >
        <Flex
          height={"85vh"}
          width={"80%"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          direction={"column"}
          border={`1px solid ${theme.colors.ci}`}
          overflowY="scroll"
          overflowX="hidden"
          borderRadius={theme.borderRadius.md}
          color={theme.colors.white}
          position="relative"
        >
          <Flex
            height={"88%"}
            width={"100%"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            direction={"column"}
            padding={theme.space[4]}
            // border={`1px solid ${theme.colors.white}`}
            overflowY={"auto"}
            position={"relative"}
          >
            {typing && (
              <Flex
                height={"5vh"}
                width={"fit-content"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                position={"absolute"}
                bottom={"3vh"}
                left={"2vh"}
                border={`1px solid ${theme.colors.warning}`}
                padding={"1%"}
                borderRadius={theme.borderRadius.md}
              >
                MusicGPT is typing...
              </Flex>
            )}
            {messages.map((message, i) => {
              return <Message key={i} model={message} />;
            })}
          </Flex>
          <Flex
            height={"10%"}
            width={"80%"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            backgroundColor={theme.colors.bgInput}
            borderRadius={theme.borderRadius.md}
            bottom={0}
            margin={theme.space[4]}
            padding={theme.space[4]}
          >
            <Input
              ref={inputRef}
              id="message-input"
              placeholder="Chat with the bot..."
              width="100%"
              height="100%"
              color={theme.colors.white}
              _placeholder={{ color: theme.colors.grayDarker }}
              _focus={{
                border: "none",
              }}
              style={{
                fontSize: theme.fontSizes.h2,
                outline: "none",
                textDecoration: "none",
              }}
              disabled={typing} // Disable input when typing is true
            />
            <Button
              height="100%"
              width="5%"
              backgroundColor={theme.colors.transparent}
              onClick={sendMessage}
              disabled={typing} // Disable button when typing is true
            >
              <TbSend size={20} color={theme.colors.ci} style={{}} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};

export default LearnMusic;
