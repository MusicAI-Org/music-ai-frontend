import { Flex, useTheme, Text, Link } from "@chakra-ui/react";
import React from "react";

interface Props {
  model: {
    message: string;
    type: string;
    title?: string;
    link?: string | undefined;
  };
}

const Message = (props: Props): JSX.Element => {
  const theme = useTheme();
  // const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <Flex
      height={"fit-content"}
      width={"100%"}
      justifyContent={props.model.type === "bot" ? "flex-start" : "flex-end"}
      alignItems={props.model.type === "bot" ? "flex-start" : "flex-end"}
      marginBottom={theme.space[4]}
    >
      <Flex
        direction={"column"}
        height={"fit-content"}
        maxWidth={"50%"}
        width={"fit-content"}
        padding={theme.space[3]}
        marginBottom={theme.space[4]}
        backgroundColor={theme.colors.transparent}
        border={
          props.model.type === "bot"
            ? `1px solid ${theme.colors.warning}`
            : `1px solid ${theme.colors.ci}`
        }
        borderRadius={theme.borderRadius.md}
        overflowWrap={"anywhere"}
      >
        <Flex>
          {props.model.title && (
            <Link
              href={props.model.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text color={theme.colors.ci} fontSize={theme.fontSizes.xl}>
                {props.model.title}
              </Text>
            </Link>
          )}
        </Flex>
        <Flex>{props.model.message}</Flex>
      </Flex>
    </Flex>
  );
};

export default Message;
