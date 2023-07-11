import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { FiThumbsDown, FiThumbsUp, FiUpload } from "react-icons/fi";
import { AiOutlinePause } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import {
  deleteMusic,
  dislikeMusic,
  likeMusic,
  viewMusic,
} from "../../../../pages/api/music";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

type Props = {
  id?: string;
  genre: [];
  views: number;
  artist: string;
  artistId: string;
  coverImg: string;
  musicUrl: string;
  songname: string;
  albumname: string;
  likesCount: number;
  setMusicUrl: any;
  likes: [string];
  dislikes: [string];
};

const MusicTile = ({
  id,
  genre,
  artist,
  artistId,
  views,
  coverImg,
  musicUrl,
  songname,
  albumname,
  likesCount,
  setMusicUrl,
  likes,
  dislikes,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const hiddenFileInput = React.useRef<any>(null);

  let userId = "";
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      userId = parsedUser.user._id;
    }
  }

  const [liked, setLiked] = React.useState(false);
  const [disliked, setDisliked] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [newSongName, setNewSongName] = useState(songname);
  const [newAlbumName, setNewAlbumName] = useState(albumname);
  const [newGenre, setNewGenre] = useState(genre.toString());
  const [newCoverImg, setNewCoverImg] = useState(coverImg);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [musicFile, setMusicFile] = useState<File | null>(null);
  const handlePlayClick = async () => {
    setMusicUrl(musicUrl);
    if (artistId != userId) {
      try {
        await viewMusic({ music_id: id });
      } catch (error) {
        console.error("Failed to increment the music views", error);
      }
    }
  };
  const handlePauseClick = async () => {
    setMusicUrl("");
  };

  // check if user is present in the likes or dislikes array
  // if yes then set the state
  React.useEffect(() => {
    if (likes.includes(userId)) {
      setLiked(true);
    }
    if (dislikes.includes(userId)) {
      setDisliked(true);
    }
  }, [likes, dislikes]);

  const styles = {
    lastIcons: {
      color: theme.colors.warning,
      fontSize: theme.fontSizes.xl2,
    },
    text: {
      color: theme.colors.warning,
      fontSize: theme.fontSizes.lg,
    },
    icons: {
      color: theme.colors.warning,
      fontSize: theme.fontSizes.xl,
    },
    joinGroupBtn: {
      height: "7vh",
      width: "100%",
      fontSize: theme.fontSizes.h3,
      color: theme.colors.ci,
      borderRadius: 0,
      backgroundColor: theme.colors.transparent,
    },
    deleteGroupBtn: {
      height: "7vh",
      width: "100%",
      fontSize: theme.fontSizes.h3,
      color: theme.colors.white,
      borderRadius: 0,
      backgroundColor: theme.colors.dangerBorder,
    },
    leaveGroupBtn: {
      height: "7vh",
      width: "100%",
      fontSize: theme.fontSizes.h3,
      color: theme.colors.white,
      borderRadius: 0,
      backgroundColor: theme.colors.warning,
    },
  };

  const handleLike = async () => {
    if (disliked) {
      setDisliked(!disliked);
    }
    setLiked(!liked);
    try {
      await likeMusic({ _id: userId, music_id: id });
    } catch (error) {
      console.error("Failed to unlike the music:", error);
    }
  };
  const handleDislike = async () => {
    if (liked) {
      setLiked(!liked);
    }
    setDisliked(false);
    try {
      await dislikeMusic({ _id: userId, music_id: id });
    } catch (error) {
      console.error("Failed to remove dislike from the music:", error);
    }
  };

  const handleDeleteSong = () => {
    setIsLoading(true);
    deleteMusic({ music_id: id })
      .then((res) => {
        console.log("res", res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
        setIsLoading(false);
      });
  };

  // submitting the updation of the song
  const handleSongNameChange = (event: { target: { value: any } }) => {
    setNewSongName(event.target.value);
  };

  const handleAlbumNameChange = (event: { target: { value: any } }) => {
    setNewAlbumName(event.target.value);
  };

  const handleGenreChange = (event: { target: { value: any } }) => {
    setNewGenre(event.target.value);
  };

  const handleCoverImgChange = (event: { target: { value: any } }) => {
    setNewCoverImg(event.target.value);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setMusicFile(file);
    }
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setIsLoadingUpdate(true);
    try {
      if (
        newSongName !== "" &&
        newAlbumName !== "" &&
        newGenre.length != 0 &&
        newCoverImg !== "" &&
        musicFile !== null
      ) {
        const formData = new FormData();
        if (newSongName != songname) formData.append("songname", newSongName);
        if (newAlbumName != albumname)
          formData.append("albumname", newAlbumName);
        if (newGenre != genre.toString()) formData.append("genre", newGenre);
        if (newCoverImg != coverImg) formData.append("coverImg", coverImg);
        formData.append("format", "mp3");
        formData.append("musicFile", musicFile);
        console.log([...formData.entries()]);
        // call post api
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/community/music/update/${id}`,
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
          // reset all
          setNewSongName("");
          setNewAlbumName("");
          setNewGenre("");
          setNewCoverImg("");
          setMusicFile(null);
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 2000);
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingUpdate(false);
    }
  };

  return (
    // <Link
    //   href={{
    //     pathname: `/video/${id}`,
    //     query: { name: heading },
    //   }}
    // >
    <Flex
      direction={"column"}
      maxW="sm"
      borderWidth="1px"
      borderRadius={theme.borderRadius.md}
      overflow="hidden"
      color={theme.colors.defaultNotification}
      height={"fit-content"}
      width="fit-content"
      display="flex"
      cursor="pointer"
    >
      <Flex width={"100%"} height={"80%"}>
        <Flex
          width={"40%"}
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={theme.space[3]}
        >
          <Image
            src={coverImg}
            alt={"img"}
            height="100%"
            width="100%"
            borderRadius={theme.borderRadius.md}
          />
        </Flex>

        <Box padding={theme.space[3]} position="relative" width={"60%"}>
          <Flex
            fontWeight="bold"
            letterSpacing="wide"
            fontSize={theme.fontSizes.xl1}
            color={theme.colors.grayDarker}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex width={"100%"}>
              <Text
                fontWeight="bold"
                color={theme.colors.white}
                fontSize={theme.fontSizes.xl}
              >
                {songname?.toUpperCase()}
              </Text>
            </Flex>
          </Flex>

          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Flex
              fontWeight="bold"
              letterSpacing="wide"
              fontSize={theme.fontSizes.md}
              color={theme.colors.grayDarker}
            >
              Creator -&nbsp;
              <Text fontWeight="bold" color={theme.colors.warning}>
                @{artist}
              </Text>
            </Flex>
          </Box>
          <Flex
            fontWeight="bold"
            letterSpacing="wide"
            fontSize={theme.fontSizes.sm}
            color={theme.colors.grayDarker}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex width={"100%"} fontSize={theme.fontSizes.md}>
              Album -&nbsp;
              <Text fontWeight="bold" color={theme.colors.warning}>
                {albumname}
              </Text>
            </Flex>
          </Flex>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Flex
              fontWeight="bold"
              letterSpacing="wide"
              color={theme.colors.grayDarker}
              fontSize={theme.fontSizes.md}
            >
              Genre -&nbsp;
              <Text fontWeight="bold" color={theme.colors.ci}>
                {genre?.join(", ")}
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Flex
        width={"100%"}
        height={"20%"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        marginBottom={"1vh"}
      >
        <Flex
          width={"20%"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          cursor="pointer"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? (
            <AiOutlinePause style={styles.icons} onClick={handlePauseClick} />
          ) : (
            <BsPlayFill style={styles.icons} onClick={handlePlayClick} />
          )}
        </Flex>
        <Flex
          width={"20%"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          cursor="pointer"
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <IoMdThumbsUp style={styles.icons} onClick={handleLike} />
          ) : (
            <FiThumbsUp style={styles.icons} onClick={handleLike} />
          )}
          <Text color={theme.colors.warning}>{likesCount}</Text>
        </Flex>
        <Flex
          width={"20%"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          cursor="pointer"
          onClick={() => setDisliked(!disliked)}
        >
          {disliked ? (
            <IoMdThumbsDown style={styles.icons} onClick={handleDislike} />
          ) : (
            <FiThumbsDown style={styles.icons} onClick={handleDislike} />
          )}
        </Flex>
        <Flex
          width={"20%"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <IoEyeSharp style={styles.lastIcons} />
          <Text style={styles.text}>{views}</Text>
        </Flex>
      </Flex>
      {artistId == userId && (
        <Flex>
          <Button
            rightIcon={<MdGroup />}
            style={styles.joinGroupBtn}
            isLoading={isLoadingUpdate}
            onClick={onOpen}
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
            Update
          </Button>
          <Button
            rightIcon={<MdGroup />}
            style={styles.deleteGroupBtn}
            isLoading={isLoading}
            onClick={handleDeleteSong}
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
            Delete
          </Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
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
                Update Music
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
                    Song Name
                  </FormLabel>
                  <Input
                    style={{
                      fontSize: theme.fontSizes.h4,
                      color: theme.colors.white,
                      margin: `${theme.space[1]} 0 ${theme.space[5]} 0`,
                      padding: theme.space[1],
                      border: `1px solid ${theme.colors.ciTrans15}`,
                      borderRadius: theme.borderRadius.md,
                      backgroundColor: theme.colors.grayBorderToggle,
                    }}
                    _placeholder={{
                      color: theme.colors.ciTrans15,
                    }}
                    ref={initialRef}
                    onChange={handleSongNameChange}
                    placeholder="Song name"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel
                    style={{
                      fontSize: theme.fontSizes.h3,
                    }}
                  >
                    Album Name
                  </FormLabel>
                  <Input
                    style={{
                      fontSize: theme.fontSizes.h4,
                      color: theme.colors.white,
                      margin: `${theme.space[1]} 0 ${theme.space[5]} 0`,
                      padding: theme.space[1],
                      border: `1px solid ${theme.colors.ciTrans15}`,
                      borderRadius: theme.borderRadius.md,
                      backgroundColor: theme.colors.grayBorderToggle,
                    }}
                    _placeholder={{
                      color: theme.colors.ciTrans15,
                    }}
                    ref={initialRef}
                    onChange={handleAlbumNameChange}
                    placeholder="Album name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    style={{
                      fontSize: theme.fontSizes.h3,
                    }}
                  >
                    Cover Image
                  </FormLabel>
                  <Input
                    style={{
                      fontSize: theme.fontSizes.h4,
                      color: theme.colors.white,
                      margin: `${theme.space[1]} 0 ${theme.space[5]} 0`,
                      padding: theme.space[1],
                      border: `1px solid ${theme.colors.ciTrans15}`,
                      borderRadius: theme.borderRadius.md,
                      backgroundColor: theme.colors.grayBorderToggle,
                    }}
                    _placeholder={{
                      color: theme.colors.ciTrans15,
                    }}
                    ref={initialRef}
                    onChange={handleCoverImgChange}
                    placeholder="Cover image"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    style={{
                      fontSize: theme.fontSizes.h3,
                    }}
                  >
                    Genre/Type
                  </FormLabel>
                  <Input
                    style={{
                      fontSize: theme.fontSizes.h4,
                      color: theme.colors.white,
                      margin: `${theme.space[1]} 0 ${theme.space[5]} 0`,
                      padding: theme.space[1],
                      border: `1px solid ${theme.colors.ciTrans15}`,
                      borderRadius: theme.borderRadius.md,
                      backgroundColor: theme.colors.grayBorderToggle,
                    }}
                    _placeholder={{
                      color: theme.colors.ciTrans15,
                    }}
                    ref={initialRef}
                    onChange={handleGenreChange}
                    placeholder="Genre/Types"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    style={{
                      fontSize: theme.fontSizes.h3,
                    }}
                  >
                    Upload File{" "}
                    <span
                      style={{
                        fontSize: theme.fontSizes.h4,
                        color: theme.colors.ci,
                      }}
                    >
                      {musicFile?.name}
                    </span>
                  </FormLabel>
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
                  mr={3}
                  style={{
                    marginRight: theme.space[3],
                    background: "transparent",
                    height: "5vh",
                    width: "50%",
                  }}
                  onClick={handleSubmit}
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
                  Update
                </Button>
                <Button
                  onClick={onClose}
                  style={{
                    height: "5vh",
                    width: "25%",
                  }}
                >
                  Cancel
                </Button>
              </ModalFooter>
              <ModalFooter>
                {showSuccessMessage && (
                  <Text
                    backgroundColor={theme.colors.warning}
                    padding={theme.space[3]}
                    margin={theme.space[3]}
                    borderRadius={theme.borderRadius.md}
                    fontWeight={"bold"}
                    width={"100%"}
                  >
                    Uploaded Successfully.
                  </Text>
                )}
                {showErrorMessage && (
                  <Text
                    backgroundColor={theme.colors.error}
                    padding={theme.space[3]}
                    margin={theme.space[3]}
                    borderRadius={theme.borderRadius.md}
                    fontWeight={"bold"}
                    width={"fit-content"}
                  >
                    Song name already exists. Please choose a different song
                    name.
                  </Text>
                )}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      )}
    </Flex>
    // </Link>
  );
};
export default MusicTile;
