import React, { useState } from "react";
import {
  Flex,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { editModel } from "../../../../../pages/api/user-api";

type Props = {
  genre?: [string];
};
interface UserData {
  user: {
    genre: string[];
  };
}

const EditGenre = (props: Props) => {
  const theme = useTheme();
  const [genre, setGenre] = useState(props.genre);
  const [isLoading, setIsLoading] = React.useState(false);
  console.log(genre);

  let userId = "";
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      userId = parsedUser.user._id;
    }
  }

  const handleGenreUpdate = async () => {
    setIsLoading(true);
    try {
      const res = await editModel({ _id: userId, genre });
      console.log("res", res);
      if (res.success) {
        // Update the genre state to reflect the updated genre
        setGenre(res.user.genre);

        // Retrieve the existing user data from local storage
        let userData: UserData = {
          user: {
            genre: [],
          },
        };
        if (typeof localStorage !== "undefined") {
          const localstoredUser = localStorage.getItem("userData");
          if (localstoredUser !== null) {
            userData = JSON.parse(localstoredUser);
          }
        }
        // Update the genre field in the retrieved user data
        userData.user.genre = res.user.genre;
        // Save the updated user data back to local storage
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("userData", JSON.stringify(userData));
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const styles = {
    pinInput: {
      width: "23%",
      height: "100%",
      fontSize: theme.fontSizes.h2,
      border: `1px solid ${theme.colors.ciDark}`,
      color: theme.colors.white,
      padding: theme.space[2],
    },
  };

  return (
    <Flex
      flexDirection={"column"}
      alignItems="flex-start"
      justifyContent="flex-start"
      height="30%"
      width="100%"
      margin={`${theme.space[2]} 0`}
    >
      <FormLabel color={theme.colors.ci}>GENRE</FormLabel>
      <Flex height="50%" alignItems={"center"} justifyContent={"space-between"}>
        <HStack width="100%" height="100%" marginTop={theme.space[3]}>
          {genre &&
            genre.map((genreItem, i) => (
              <Input
                key={i}
                style={styles.pinInput}
                textAlign="center"
                _placeholder={{
                  color: theme.colors.ciTrans15,
                }}
                placeholder={genreItem}
                onChange={(e) => {
                  const updatedGenre = [...genre];
                  updatedGenre[i] = e.target.value;
                  setGenre(updatedGenre as [string]);
                }}
              />
            ))}
        </HStack>
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<AiOutlineArrowRight />}
          style={{
            height: "5vh",
            width: "10%",
            color: theme.colors.gray,
            padding: `${theme.space[5]} 0`,
          }}
          onClick={handleGenreUpdate}
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
        />
      </Flex>
    </Flex>
  );
};

export default EditGenre;
