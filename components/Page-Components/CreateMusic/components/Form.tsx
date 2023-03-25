import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { useReactMediaRecorder } from "react-media-recorder";
import {
  BsFillPlayFill,
  BsFillStopFill,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { FiUpload } from "react-icons/fi";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

interface Props {
  selected: string;
}

const CustomForm = (props: Props): JSX.Element => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true });
  console.log(status);

  const [show, setShow] = React.useState(false);
  const theme = useTheme();

  const [inputID, setInputID] = useState("");
  const [focusedID, setFocusedID] = React.useState(false);
  const onFocusID = () => setFocusedID(true);
  const onBlurID = () => setFocusedID(false);
  const handleInputIdChange = (e: any) => {
    setInputID(e.target.value);
  };

  const [inputPassword, setInputPassword] = useState("");
  const handleClick = () => setShow(!show);
  const [focusedPassword, setFocusedPassword] = React.useState(false);
  const handleInputPasswordChange = (e: any) =>
    setInputPassword(e.target.value);
  const onFocusPassword = () => setFocusedPassword(true);
  const onBlurPassword = () => setFocusedPassword(false);

  const isErrorID = inputID === "";
  const isErrorPassword = inputPassword === "";

  const hiddenFileInput = React.useRef<any>(null);

  const handleClickUpload = (e: any) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (e: any) => {
    const fileUploaded = e.target.files[0];
    console.log(fileUploaded);
    // props.handleFile(fileUploaded);
  };

  const audioStyles = {
    width: "100%",
    height: "10vh",
  };

  return (
    <FormControl
      isInvalid={isErrorID || isErrorPassword}
      style={{
        color: theme.colors.white,
      }}
    >
      {/* {music id} */}
      <FormLabel>Music ID</FormLabel>
      <Input
        type="text"
        value={inputID}
        onChange={handleInputIdChange}
        placeholder="Enter Unique ID"
        style={{
          color: theme.colors.bgInput,
          borderColor: focusedID ? theme.colors.ci : theme.colors.grayBorderBox,
          borderRadius: theme.borderRadius.md,
          paddingLeft: theme.space[2],
          fontSize: "1.2rem",
        }}
        onFocus={onFocusID}
        onBlur={onBlurID}
      />
      {isErrorID && (
        <FormErrorMessage
          style={{
            color: theme.colors.dangerBorder,
          }}
        >
          Music ID is required.
        </FormErrorMessage>
      )}

      {/* {password} */}
      <FormLabel paddingTop={theme.space[8]}>Password</FormLabel>
      <InputGroup size="sm">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          onChange={handleInputPasswordChange}
          style={{
            color: theme.colors.bgInput,
            borderColor: focusedPassword
              ? theme.colors.ci
              : theme.colors.grayBorderBox,
            borderRadius: theme.borderRadius.md,
            paddingLeft: theme.space[2],
            fontSize: "1.2rem",
          }}
          onFocus={onFocusPassword}
          onBlur={onBlurPassword}
        />
        <InputRightElement
          width="4.5rem"
          height="100%"
          style={{ borderRadius: theme.borderRadius.md }}
        >
          <Button
            h="1.75rem"
            size="lg"
            onClick={handleClick}
            colorScheme="pink"
            variant="solid"
            style={{
              fontSize: "1rem",
            }}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      {isErrorPassword && (
        <FormErrorMessage
          style={{
            color: theme.colors.dangerBorder,
          }}
        >
          Password is required.
        </FormErrorMessage>
      )}

      {/* {record music container} */}
      {props.selected === "Record Music" ? (
        <>
          {status === "recording" ? (
            <FormLabel
              paddingTop={theme.space[8]}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Flex
                style={{
                  height: "5px",
                  width: "5px",
                  borderRadius: theme.borderRadius.half,
                  backgroundColor: theme.colors.danger,
                  marginRight: theme.space[2],
                }}
              ></Flex>
              Recording Music
            </FormLabel>
          ) : (
            <FormLabel paddingTop={theme.space[8]}>Record Music</FormLabel>
          )}
          <Flex
            style={{
              height: "10vh",
              width: "100%",
              paddingBottom: theme.space[8],
              display: "flex",
              // alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              leftIcon={<BsFillPlayFill />}
              colorScheme="pink"
              variant="solid"
              onClick={startRecording}
              style={{
                height: "3rem",
                width: "48%",
                marginBottom: theme.space[8],
              }}
            >
              Start
            </Button>
            <Button
              leftIcon={<BsFillStopFill />}
              colorScheme="pink"
              variant="solid"
              onClick={stopRecording}
              style={{
                height: "3rem",
                width: "48%",
                marginBottom: theme.space[8],
              }}
            >
              Stop
            </Button>
          </Flex>
          {/* <audio src={mediaBlobUrl}></audio> */}
          {mediaBlobUrl === undefined ? (
            <></>
          ) : (
            <>
              <audio src={mediaBlobUrl} controls style={audioStyles} />
              <Text
                style={{
                  paddingBottom: theme.space[4],
                }}
              >
                You can download the recording by clicking the 3 dots on right
                side and then upload to the website.
              </Text>
              <FormLabel paddingTop={theme.space[4]}>Upload Music</FormLabel>
              <Button
                leftIcon={<BsMusicNoteBeamed />}
                colorScheme="pink"
                variant="solid"
                onClick={handleClickUpload}
                style={{
                  height: "3rem",
                  width: "100%",
                  marginBottom: theme.space[8],
                }}
              >
                Upload
              </Button>
              <Input
                pr="4.5rem"
                type={"file"}
                style={{ display: "none" }}
                ref={hiddenFileInput}
                onChange={handleChange}
              />
            </>
          )}
        </>
      ) : (
        <>
          {/* {upload music option} */}{" "}
          <FormLabel paddingTop={theme.space[8]}>Upload Music</FormLabel>
          <Button
            leftIcon={<BsMusicNoteBeamed />}
            colorScheme="pink"
            variant="solid"
            onClick={handleClickUpload}
            style={{
              height: "3rem",
              width: "100%",
              marginBottom: theme.space[8],
            }}
          >
            Upload
          </Button>
          <Input
            pr="4.5rem"
            type={"file"}
            style={{ display: "none" }}
            ref={hiddenFileInput}
            onChange={handleChange}
          />
        </>
      )}

      <Button
        leftIcon={<FiUpload />}
        colorScheme="pink"
        variant="solid"
        // onClick={handleClickUpload}
        style={{
          height: "3rem",
          width: "100%",
          backgroundColor: theme.colors.ci,
        }}
      >
        Confirm
      </Button>
    </FormControl>
  );
};

export default CustomForm;
