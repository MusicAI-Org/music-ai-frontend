import React, { useRef, useState } from "react";
import { Button, Flex, Input, Spinner, useTheme } from "@chakra-ui/react";
import { StyledContainer } from "../Start/styles/pageStyles";
import Footer from "../../utils/Footer/Footer";
import { TbSend } from "react-icons/tb";
import TextContainer from "../../utils/Texts/TextContainer";
import { motion, useAnimation } from "framer-motion";

const TextToMusicPage = (): JSX.Element => {
  const theme = useTheme();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [animateDiv, setAnimateDiv] = useState<boolean>(false);

  const handleSend = async () => {
    const inputValue = inputRef.current?.value;
    console.log(inputValue);
    if (inputValue) {
      setLoading(true);
      setAnimateDiv(true);
      try {
        // Send the input value to the API
        const response = await fetch("http://localhost:8080/test", {
          method: "POST",
          body: JSON.stringify({ query: inputValue }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        setData(data.message);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        inputRef.current.value = "";
      }
    }
  };

  const motionControls = useAnimation();

  // Define the animation variants
  const animationVariants = {
    visible: { y: "0", transition: { duration: 0.5 } },
    hidden: { y: "35vh", transition: { duration: 0.5 } },
  };

  // Run the animation when animateDiv changes
  React.useEffect(() => {
    if (animateDiv) {
      motionControls.start("visible");
    } else {
      motionControls.start("hidden");
    }
  }, [animateDiv, motionControls]);

  return (
    <StyledContainer color="">
      <Flex
        height={"90vh"}
        width={"100%"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        marginBottom={theme.space[9]}
        padding={theme.space[4]}
        paddingLeft={theme.space[9]}
      >
        <Flex width="100%" height="10vh">
          <TextContainer
            text={"Convert Text to Music"}
            size={theme.fontSizes.xl5}
          />
        </Flex>
        <Flex
          width="100%"
          height="80vh"
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Flex
            as={motion.div}
            width="60%"
            height="10vh"
            padding={theme.space[3]}
            backgroundColor={theme.colors.bgBox}
            borderRadius={theme.borderRadius.md}
            initial="hidden" // Set initial animation state
            variants={animationVariants} // Use the defined animation variants
            animate={motionControls} // Pass the motion controls to the animate property
          >
            <Input
              ref={inputRef}
              color={theme.colors.white}
              placeholder="Please Enter Your Prompt ..."
              _placeholder={{
                color: theme.colors.ciTrans15,
              }}
              textDecor="none"
              border="none"
            />
            <Button
              ml={4}
              height="100%"
              colorScheme="teal"
              onClick={handleSend}
              leftIcon={<TbSend />}
              background={theme.colors.transparent}
              borderRadius={theme.borderRadius.md}
            >
              Send
            </Button>
          </Flex>
          <Flex
            width="100%"
            height="90vh"
            alignItems="center"
            justifyContent="center"
          >
            {isLoading ? (
              <Spinner
                thickness="2px"
                speed="0.65s"
                emptyColor={theme.colors.gray}
                color={theme.colors.ci}
                size="md"
              />
            ) : (
              <Flex color={theme.colors.white}>
                {data.length != 0 ? data : ""}
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};

export default TextToMusicPage;
