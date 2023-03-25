/* eslint-disable require-jsdoc */
import * as React from "react";
import { Avatar, Box, BoxProps, forwardRef, useTheme } from "@chakra-ui/react";

const ProfileAvatar = () => {
  const theme = useTheme();
  const style = {
    backgroundColor: theme.colors.ci,
    borderRadius: theme.borderRadius.half,
  };

  const PreviewImage = forwardRef<BoxProps, typeof Box>((props, ref) => {
    return (
      <Box
        bg="white"
        top="0"
        height="100%"
        width="100%"
        position="absolute"
        borderWidth="1px"
        borderStyle="solid"
        rounded="sm"
        borderColor="gray.400"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        {...props}
        ref={ref}
      />
    );
  });
  return (
    <Box
      borderWidth="1px"
      display={"flex"}
      flexDirection={"row"}
      width={"fit-content"}
      height={"100%"}
      position={"relative"}
      border="none"
    >
      <Avatar
        name="Paarth Jain"
        style={{
          width: "3rem",
          height: "3rem",
          borderRadius: theme.borderRadius.half,
          cursor: "pointer",
          alignSelf: "center",
        }}
      >
        <PreviewImage
          style={style}
          backgroundImage={
            "https://avatars.githubusercontent.com/u/76266935?v=4"
          }
        />
      </Avatar>
    </Box>
  );
};

export default ProfileAvatar;
