import { Flex, Image, useTheme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Footer from "../../utils/Footer/Footer";
import TextContainer from "../../utils/Texts/TextContainer";
const CustomForm = dynamic(() => import("./components/Form"), { ssr: false });
import SelectTab from "./components/SelectTab";
import { StyledContainer } from "./styles/pageStyles";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Create = (): JSX.Element => {
  const [selected, setSelected] = useState("Upload Music");
  // console.log("hihih", selected);
  const theme = useTheme();
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
      >
        <TextContainer text={"Create Your Music"} size={theme.fontSizes.xl5} />
        <SelectTab selected={selected} setSelected={setSelected} />
        <Flex height={"100%"} width={"100%"}>
          <Flex
            alignItems="center"
            justifyContent="center"
            height="80%"
            width="40%"
          >
            <Image src="/img4.png" h={"100%"} w={"100%"} />
          </Flex>
          <Flex height={"100%"} width={"50%"} paddingLeft={theme.space[8]}>
            <CustomForm selected={selected} />
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </StyledContainer>
  );
};
export default Create;
