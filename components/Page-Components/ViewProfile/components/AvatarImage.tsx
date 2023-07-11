/* eslint-disable require-jsdoc */
import * as React from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  BoxProps,
  forwardRef,
  // Input,
  useTheme,
} from "@chakra-ui/react";

const AvatarImage = (props: any) => {
  const theme = useTheme();
  const style = {
    backgroundColor: theme.colors.ci,
    borderRadius: theme.borderRadius.half,
  };
  const style1 = {
    backgroundColor: theme.colors.ci,
    borderRadius: theme.borderRadius.half,
    bottom: "1vh",
    right: "1vh",
  };

  const PreviewImage = forwardRef<BoxProps, typeof Box>((props, ref) => {
    return (
      <Box
        top="0"
        bg="white"
        rounded="sm"
        width="100%"
        height="100%"
        borderWidth="1px"
        position="absolute"
        borderStyle="solid"
        borderColor="gray.400"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        cursor="pointer"
        {...props}
        ref={ref}
      />
    );
  });
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      display={"flex"}
      flexDirection={"row"}
      width={"30%"}
      height={"100%"}
      position={"relative"}
      border="none"
      transform={"translateY(-50%)"}
      cursor="pointer"
    >
      <Avatar
        name="Paarth Jain"
        style={{
          width: "7rem",
          height: "7rem",
          borderRadius: theme.borderRadius.half,
          padding: theme.space[6],
          cursor: "pointer",
        }}
      >
        <PreviewImage style={style} backgroundImage={props.avatarImg} />
        <AvatarBadge boxSize="1.4em" style={style1} position="absolute" />
      </Avatar>
    </Box>
  );
};

export default AvatarImage;
