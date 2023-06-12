import React from "react";
import { Flex, Image, useTheme } from "@chakra-ui/react";
import { StyledContainer } from "../Profile/styles/pageStyles";
import TextContainer from "../../utils/Texts/TextContainer";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const CommunityPage = (props: any): JSX.Element => {
  const theme = useTheme();
  console.log("pp", props.particularCommunityData);

  const dateStr = props.particularCommunityData?.communityData?.createdAt;
  const date = new Date(dateStr);

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const userFriendlyDate = `${month} ${day}, ${year}, ${hour}:${minute}:${second}`;

  return (
    <StyledContainer color="">
      <Flex
        flexDirection={"column"}
        alignItems="center"
        justifyContent="flex-start"
        width={"100%"}
        height={"100vh"}
        overflow={"hidden"}
        paddingTop={theme.space[4]}
      >
        <Flex
          alignItems={"flex-start"}
          justifyContent={"space-evenly"}
          height={"25vh"}
          width={"100%"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            width={"30%"}
            height={"100%"}
          >
            <Image
              src={props.particularCommunityData?.communityData?.imgUrl}
              alt="community"
              width={"80%"}
              height={"100%"}
              objectFit={"cover"}
              borderRadius={theme.borderRadius.md}
            />
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
            width={"70%"}
            height={"100%"}
          >
            <TextContainer
              text={props.particularCommunityData?.communityData?.name}
              size={theme.fontSizes.xl5}
              color={theme.colors.ci}
            />
            <Flex
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              width={"100%"}
            >
              <TextContainer
                text={"Description : "}
                size={theme.fontSizes.xl2}
                color={theme.colors.warning}
                width="15%"
              />
              <TextContainer
                text={props.particularCommunityData?.communityData?.description}
                size={theme.fontSizes.xl2}
                color={theme.colors.white}
              />
            </Flex>
            <Flex
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              width={"100%"}
            >
              <TextContainer
                text={"Created By : "}
                size={theme.fontSizes.xl2}
                color={theme.colors.warning}
                width="15%"
              />
              <TextContainer
                text={
                  props.particularCommunityData?.communityData?.createdBy?.name
                }
                size={theme.fontSizes.xl2}
                color={theme.colors.white}
              />
            </Flex>
            <Flex
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              width={"100%"}
            >
              <TextContainer
                text={"Created At : "}
                size={theme.fontSizes.xl2}
                color={theme.colors.warning}
                width="15%"
              />
              <TextContainer
                text={userFriendlyDate}
                size={theme.fontSizes.xl2}
                color={theme.colors.white}
              />
            </Flex>
            <Flex
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              width={"100%"}
            >
              <TextContainer
                text={"Members : "}
                size={theme.fontSizes.xl2}
                color={theme.colors.warning}
                width="15%"
              />
              <TextContainer
                text={
                  props.particularCommunityData?.communityData?.members?.length
                }
                size={theme.fontSizes.xl2}
                color={theme.colors.white}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </StyledContainer>
  );
};
export default CommunityPage;
