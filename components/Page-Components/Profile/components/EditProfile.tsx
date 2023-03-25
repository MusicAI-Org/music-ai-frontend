/* eslint-disable require-jsdoc */
import * as React from "react";
import { Button, useTheme } from "@chakra-ui/react";
// import { FaPlay } from "react-icons/fa";
// import Link from "next/link";

const EditProfile = () => {
  const theme = useTheme();
  const style = {
    height: "5vh",
    width: "70%",
    fontSize: theme.fontSizes.h3,
    background: theme.colors.ciDark,
  };
  return <Button style={style}>Edit User Profile</Button>;
};

export default EditProfile;
