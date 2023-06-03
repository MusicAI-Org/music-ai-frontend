import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
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
import { useAuth0 } from "@auth0/auth0-react";
import useUser from "../../../../swr/user/useUser";
// import * as Tone from "tone";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

interface Props {
  selected: string;
}

const CustomForm = (props: Props): JSX.Element => {
  const { user } = useAuth0();

  const { user: model } = useUser({ email: user?.email || "" });
  const userId = model?.fullUserPopulatedDetails?._id;
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ audio: true });
  console.log(status);

  const theme = useTheme();

  const [focusedID, setFocusedID] = React.useState(false);
  const onFocusID = () => setFocusedID(true);
  const onBlurID = () => setFocusedID(false);

  const hiddenFileInput = React.useRef<any>(null);

  const handleClickUpload = (e: any) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (e: any) => {
    const fileUploaded = e.target.files[0];
    console.log(fileUploaded);
    // props.handleFile(fileUploaded);
  };

  // ====== dont touch

  const [songName, setSongName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [genre, setGenre] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [musicFile, setMusicFile] = useState<File | null>(null);

  const handleSongNameChange = (event: { target: { value: any } }) => {
    setSongName(event.target.value);
  };

  const handleAlbumNameChange = (event: { target: { value: any } }) => {
    setAlbumName(event.target.value);
  };

  const handleGenreChange = (event: { target: { value: any } }) => {
    setGenre(event.target.value);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setMusicFile(file);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);
    try {
      if (
        songName !== "" &&
        albumName !== "" &&
        genre !== "" &&
        musicFile !== null &&
        userId !== ""
      ) {
        const formData = new FormData();
        formData.append("songname", songName);
        formData.append("artist", userId);
        formData.append("albumname", albumName);
        formData.append("genre", genre);
        formData.append("format", "mp3");
        formData.append("musicFile", musicFile);
        console.log([...formData.entries()]);
        // call post api
        const res = await fetch(
          "https://music-ai-backend.onrender.com/api/community/music/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        console.log(data);
        if (
          data?.message ===
          "Song name already exists. Please choose a different song name."
        ) {
          setShowErrorMessage(true);
          setTimeout(() => {
            setShowErrorMessage(false);
          }, 2000);
        } else {
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 2000);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const isError =
    songName === "" || albumName === "" || genre === "" || musicFile === null;

  //

  const audioStyles = {
    width: "100%",
    height: "10vh",
  };

  return (
    <FormControl
      isInvalid={isError}
      style={{
        color: theme.colors.white,
      }}
    >
      <form onSubmit={handleSubmit}>
        {/* {music id} */}
        <FormLabel>Song Name</FormLabel>
        <Input
          type="text"
          value={songName}
          onChange={handleSongNameChange}
          placeholder="Enter Song Name"
          _placeholder={{
            color: theme.colors.ciTrans15,
          }}
          style={{
            color: theme.colors.white,
            borderColor: focusedID
              ? theme.colors.ci
              : theme.colors.grayBorderBox,
            borderRadius: theme.borderRadius.md,
            paddingLeft: theme.space[2],
            fontSize: "1.2rem",
          }}
          onFocus={onFocusID}
          onBlur={onBlurID}
        />
        {isError && (
          <FormErrorMessage
            style={{
              color: theme.colors.dangerBorder,
            }}
          >
            Song Name is required.
          </FormErrorMessage>
        )}

        {/* {password} */}
        <FormLabel paddingTop={theme.space[8]}>Album Name</FormLabel>
        <Input
          type="text"
          value={albumName}
          onChange={handleAlbumNameChange}
          placeholder="Enter Album Name"
          _placeholder={{
            color: theme.colors.ciTrans15,
          }}
          style={{
            color: theme.colors.white,
            borderColor: focusedID
              ? theme.colors.ci
              : theme.colors.grayBorderBox,
            borderRadius: theme.borderRadius.md,
            paddingLeft: theme.space[2],
            fontSize: "1.2rem",
          }}
          onFocus={onFocusID}
          onBlur={onBlurID}
        />
        {isError && (
          <FormErrorMessage
            style={{
              color: theme.colors.dangerBorder,
            }}
          >
            Album Name is required.
          </FormErrorMessage>
        )}

        <FormLabel paddingTop={theme.space[8]}>Genre / Type</FormLabel>
        <Input
          type="text"
          value={genre}
          onChange={handleGenreChange}
          placeholder="Enter Genre"
          _placeholder={{
            color: theme.colors.ciTrans15,
          }}
          style={{
            color: theme.colors.white,
            borderColor: focusedID
              ? theme.colors.ci
              : theme.colors.grayBorderBox,
            borderRadius: theme.borderRadius.md,
            paddingLeft: theme.space[2],
            fontSize: "1.2rem",
          }}
          onFocus={onFocusID}
          onBlur={onBlurID}
        />
        {isError && (
          <FormErrorMessage
            style={{
              color: theme.colors.dangerBorder,
            }}
          >
            Genre type is required.
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
              leftIcon={<FiUpload />}
              colorScheme="pink"
              variant="solid"
              onClick={() => hiddenFileInput.current.click()}
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
              type="file"
              style={{ display: "none" }}
              ref={hiddenFileInput}
              onChange={handleFileChange}
            />
          </>
        )}

        <Button
          leftIcon={<FiUpload />}
          colorScheme="pink"
          variant="solid"
          onClick={handleSubmit}
          style={{
            height: "3rem",
            width: "100%",
            backgroundColor: theme.colors.ci,
            marginBottom: theme.space[4],
          }}
          disabled={isError}
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
          Confirm
        </Button>
        {showSuccessMessage && (
          <Text
            backgroundColor={theme.colors.warning}
            padding={theme.space[3]}
            borderRadius={theme.borderRadius.md}
            fontWeight={"bold"}
            width={"27%"}
          >
            Uploaded Successfully.
          </Text>
        )}
        {showErrorMessage && (
          <Text
            backgroundColor={theme.colors.error}
            padding={theme.space[3]}
            borderRadius={theme.borderRadius.md}
            fontWeight={"bold"}
            width={"fit-content"}
          >
            Song name already exists. Please choose a different song name.
          </Text>
        )}
      </form>
    </FormControl>
  );
};

export default CustomForm;
