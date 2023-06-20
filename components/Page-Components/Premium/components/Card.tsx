import React from "react";
import { Text, Image, Flex, useTheme } from "@chakra-ui/react";
import ColoredLine from "../../../utils/Line/ColoredLine";
import { BsDot } from "react-icons/bs";

interface Props {
  heading: string;
  cost: string;
  features: string[];
  height?: string;
  width?: string;
  color?: string;
}

const Card = (props: Props) => {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      height={props.height}
      width={props.width}
      backgroundColor={props.color}
      borderRadius={theme.borderRadius.lg}
      padding={theme.space[5]}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        height="40%"
        width="100%"
        marginBottom={theme.space[5]}
      >
        <Image
          src="/playlistImgs/img1.jpg"
          width={"30%"}
          height={"100%"}
          borderRadius={theme.borderRadius.lg}
        />
        <Flex
          direction="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          height="100%"
          width="70%"
          marginLeft={"2vh"}
        >
          <Text
            textTransform={"uppercase"}
            fontSize={theme.fontSizes.xl}
            fontWeight={"bold"}
          >
            {props.heading}
          </Text>
          <Flex
            width={"100%"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text
              fontSize={theme.fontSizes.xl6}
              color={
                props.heading === "Professional"
                  ? theme.colors.secondary
                  : theme.colors.ci
              }
              width={"50%"}
              textAlign={"center"}
              textDecoration={
                props.heading === "Standard" ? "line-through" : "none"
              }
            >
              {props.cost}
            </Text>
            {props.heading === "Standard" && (
              <Text
                fontSize={theme.fontSizes.xl3}
                color={theme.colors.ci}
                width={"50%"}
              >
                Free
              </Text>
            )}
          </Flex>
          <Text
            fontSize={theme.fontSizes.xl}
            color={theme.colors.gray}
            width={"100%"}
            textAlign={"center"}
          >
            per Month
          </Text>
        </Flex>
      </Flex>
      <ColoredLine color={theme.colors.ciDark} width="100%" />
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        height="70%"
        width="100%"
        marginTop={theme.space[2]}
      >
        <Text fontSize={theme.fontSizes.xl}>Features</Text>
        {props.features.map((feature: string, id: number) => (
          <Flex
            key={id}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            height="fit-content"
            width="100%"
            fontSize={theme.fontSizes.xl}
            fontWeight={"550"}
            color={
              props.heading === "Professional"
                ? theme.colors.secondary
                : theme.colors.ci
            }
          >
            <BsDot
              style={{
                alignSelf: "center",
              }}
            />
            {feature}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Card;
