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
  Spinner,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import { createCommunity } from "../../../../pages/api/community-api";
import { useRouter } from "next/router";

const CreateCommunityModal = () => {
  const router = useRouter();
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = React.useState(false);

  const nameRef = React.useRef<HTMLInputElement | null>(null);
  const descRef = React.useRef<HTMLInputElement | null>(null);
  const urlRef = React.useRef<HTMLInputElement | null>(null);
  const finalRef = React.useRef<HTMLInputElement | null>(null);
  const style = {
    height: "5vh",
    width: "60%",
    fontSize: theme.fontSizes.h4,
    background: theme.colors.transparent,
  };

  const onCreateCommunity = async () => {
    setIsLoading(true);
    try {
      const data = await createCommunity({
        name: nameRef.current?.value,
        description: descRef.current?.value,
        user: {
          _id: "63e69e20084d5200111c5e1d", //  demo id
        },
        url: urlRef.current?.value,
      });
      console.log(data);

      // redirect the user to page
      router.push(`/community/${data.community._id}`);
      // setImageURL(data.image);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button style={style} onClick={onOpen}>
        Create Community
      </Button>
      ;
      <Modal
        initialFocusRef={nameRef}
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
            Create Community
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
                Enter the Name
              </FormLabel>
              <Input
                ref={nameRef}
                // value={init}
                placeholder="eg.Music Starter"
                _placeholder={{
                  color: theme.colors.ciTrans15,
                }}
                style={{
                  fontSize: theme.fontSizes.h4,
                  color: theme.colors.white,
                  margin: `${theme.space[1]} 0 ${theme.space[5]} 0`,
                  padding: theme.space[1],
                  border: `1px solid ${theme.colors.ciTrans15}`,
                  borderRadius: theme.borderRadius.md,
                  backgroundColor: theme.colors.grayBorderToggle,
                }}
              />
              <FormLabel
                style={{
                  fontSize: theme.fontSizes.h3,
                }}
              >
                Enter the Description
              </FormLabel>
              <Input
                ref={descRef}
                // value={init}
                placeholder="eg.A group aimed at individuals who are beginning their journey in the field of music."
                _placeholder={{
                  color: theme.colors.ciTrans15,
                }}
                style={{
                  fontSize: theme.fontSizes.h4,
                  color: theme.colors.white,
                  margin: `${theme.space[1]} 0 ${theme.space[5]} 0`,
                  padding: theme.space[1],
                  border: `1px solid ${theme.colors.ciTrans15}`,
                  borderRadius: theme.borderRadius.md,
                  backgroundColor: theme.colors.grayBorderToggle,
                }}
              />
              <FormLabel
                style={{
                  fontSize: theme.fontSizes.h3,
                }}
              >
                Image URL
              </FormLabel>
              <Input
                ref={urlRef}
                // value={init}
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
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              colorScheme="blue"
              style={{
                marginRight: theme.space[3],
                background: "transparent",
                height: "5vh",
                width: "20%",
              }}
              onClick={onCreateCommunity}
              isLoading={isLoading}
              spinner={
                <Spinner
                  thickness="2px"
                  speed="0.65s"
                  emptyColor={theme.colors.gray}
                  color={theme.colors.ci}
                  size="md"
                />
              }
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateCommunityModal;
