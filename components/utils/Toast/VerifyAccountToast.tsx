import { Flex, Image, useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import TextContainer from "../Texts/TextContainer";

const VerifyAccountToast = () => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {showModal && (
        <Flex
          alignItems="center"
          justifyContent="center"
          width={"35%"}
          height={"20vh"}
          backgroundColor={theme.colors.bgBox}
          position={"fixed"}
          top={"70%"}
          left={"50%"}
          transform={"translate(-50%, 0%)"}
          borderRadius={theme.borderRadius.md}
          border={`2px solid ${theme.colors.ci}`}
        >
          <ImCross
            size={15}
            color={"#fff"}
            cursor={"pointer"}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
            onClick={() => setShowModal(false)}
          />
          <Image
            src={"/credentialsImgs/img6.png"}
            alt={"Verify Account"}
            width={"140px"}
            height={"140px"}
          />
          <TextContainer
            text={"Please verify your account to access more features!"}
            align={"center"}
            size={"1.1rem"}
          />
        </Flex>
      )}
    </>
  );
};

export default VerifyAccountToast;
