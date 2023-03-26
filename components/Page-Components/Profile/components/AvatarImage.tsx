/* eslint-disable require-jsdoc */
import * as React from "react";
import {
  Avatar,
  AvatarBadge,
  Box,
  BoxProps,
  forwardRef,
  Input,
  useTheme,
} from "@chakra-ui/react";
import { useState } from "react";

const AvatarImage = () => {
  const theme = useTheme();
  const style = {
    backgroundColor: theme.colors.ci,
    borderRadius: theme.borderRadius.half,
  };

  const [bgImg, setBgImg] = useState("https://bit.ly/broken-link");

  const bgImgHandler = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBgImg(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
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
          width: "5rem",
          height: "5rem",
          borderRadius: theme.borderRadius.half,
          padding: theme.space[6],
          cursor: "pointer",
        }}
      >
        <PreviewImage style={style} backgroundImage={bgImg} />
        <Input
          type="file"
          position="absolute"
          top="0"
          left="0"
          opacity="0"
          aria-hidden="true"
          accept="image/*"
          width="5rem"
          height="5rem"
          padding={theme.space[6]}
          cursor="pointer"
          borderRadius={theme.borderRadius.half}
          onChange={bgImgHandler}
        />
        <AvatarBadge boxSize="1.25em" style={style} />
      </Avatar>
    </Box>
  );
};

export default AvatarImage;
