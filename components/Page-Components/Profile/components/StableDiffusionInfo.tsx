/* eslint-disable require-jsdoc */
import * as React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
// import { FaPlay } from "react-icons/fa";
// import Link from "next/link";

const StableDiffusionInfo = () => {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const style = {
    height: "5vh",
    width: "100%",
    fontSize: theme.fontSizes.h3,
    background: theme.colors.transparent,
  };
  return (
    <>
      <Button style={style} onClick={onOpen}>
        What is AI Generated Image?
      </Button>
      ;
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        colorScheme={theme.colors.white}
      >
        <ModalOverlay />
        <ModalContent
          style={{
            color: theme.colors.white,
            width: "35%",
            height: "fit-content",
            background: theme.colors.bgBoxLighter,
            padding: theme.space[4],
            borderRadius: theme.borderRadius.md,
          }}
        >
          <ModalHeader
            style={{
              color: theme.colors.ci,
              fontSize: theme.fontSizes.h1,
            }}
          >
            Stable Diffusion
          </ModalHeader>
          <Text>
            Stable diffusion refers to a technique for generating images from
            text using artificial intelligence, where the process of generating
            the image is done in a smooth and consistent manner. This means that
            the generated images will not change dramatically from one step to
            the next, and the process will not suddenly diverge or fail.
            <br />
            <br />
            In other words, stable diffusion ensures that the generated images
            are of high quality and realistic, without any sudden glitches or
            unexpected changes. This is achieved by carefully controlling the
            way that information is passed through the AI system, allowing it to
            gradually build up a coherent image over time.
          </Text>
          <ModalHeader
            style={{
              color: theme.colors.ci,
              fontSize: theme.fontSizes.h1,
              marginTop: theme.space[3],
            }}
          >
            Try Our Stable Diffusion API
          </ModalHeader>
          <ModalCloseButton
            style={{
              position: "absolute",
              right: 10,
              top: 10,
            }}
          />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel
                style={{
                  fontSize: theme.fontSizes.h3,
                }}
              >
                Enter the Prompt
              </FormLabel>
              <Input
                ref={initialRef}
                placeholder="eg.an astronaut riding a dog on mars artstation hd dramatic lighting detailed"
                _placeholder={{
                  color: theme.colors.ciTrans15,
                }}
                style={{
                  fontSize: theme.fontSizes.h4,
                  color: theme.colors.white,
                  margin: `${theme.space[1]} 0`,
                  padding: theme.space[1],
                  border: `1px solid ${theme.colors.ciTrans15}`,
                  borderRadius: theme.borderRadius.md,
                  backgroundColor: theme.colors.grayBorderToggle,
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter
            style={{
              marginTop: theme.space[3],
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              colorScheme="blue"
              style={{
                marginRight: theme.space[3],
              }}
            >
              Generate
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StableDiffusionInfo;
