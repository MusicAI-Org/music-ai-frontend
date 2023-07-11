import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Spinner,
  FormLabel,
  Input,
  useEditableControls,
} from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";
import { AiOutlineRollback } from "react-icons/ai";
import { useTheme } from "@chakra-ui/react";
import { editModel } from "../../../../../pages/api/user-api";

interface Props {
  avatarName: string;
}
interface UserData {
  user: {
    avatarName: string;
  };
}
const EditAvatarName = (props: Props) => {
  const theme = useTheme();
  const [avatarName, setAvatarName] = useState(props.avatarName);
  const [isLoading, setIsLoading] = useState(false);
  /* Here's a custom control */

  const handleAvatarChange = (value: any) => {
    setAvatarName(value);
  };
  const EditableControls = () => {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    const styles = {
      button: {
        height: "100%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: theme.fontSizes.h3,
      },
      editBtn: {
        height: "100%",
        width: "100%",
        fontSize: theme.fontSizes.h3,
      },
    };

    let userId = "";
    if (typeof localStorage !== "undefined") {
      const localstoredUser = localStorage.getItem("userData");
      if (localstoredUser !== null) {
        const parsedUser = JSON.parse(localstoredUser);
        userId = parsedUser.user._id;
      }
    }

    const handleChange = async () => {
      try {
        setIsLoading(true);
        const res = await editModel({ _id: userId, avatarName });
        console.log("res", res);
        if (res.success) {
          // Retrieve the existing user data from local storage
          let userData: UserData = {
            user: {
              avatarName: "",
            },
          };
          if (typeof localStorage !== "undefined") {
            const localstoredUser = localStorage.getItem("userData");
            if (localstoredUser !== null) {
              userData = JSON.parse(localstoredUser);
            }
          }
          userData.user.avatarName = res.user.avatarName;
          // Save the updated user data back to local storage
          if (typeof localStorage !== "undefined") {
            localStorage.setItem("userData", JSON.stringify(userData));
          }
          // Update the name state to reflect the updated name
          setAvatarName((prevAvatar) => (prevAvatar = res.user.avatarName));
          // console.log(isEditing);
        }
      } catch (e) {
        // Handle error
      } finally {
        // Perform any cleanup or additional actions
        setIsLoading(false);
      }
    };

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm" height="100%" width="20%">
        <Button
          {...getSubmitButtonProps({ onClick: handleChange })}
          style={styles.button}
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
          <TiTick size={30} />
        </Button>
        <Button {...getCancelButtonProps()} style={styles.button}>
          <AiOutlineRollback size={30} />
        </Button>
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center" height="100%" width="20%">
        <Button size="sm" {...getEditButtonProps()} style={styles.editBtn}>
          Edit
        </Button>
      </Flex>
    );
  };

  return (
    <Flex
      flexDirection={"column"}
      alignItems="flex-start"
      justifyContent="flex-start"
      height="100%"
      width="100%"
      margin={`${theme.space[2]} 0`}
    >
      <FormLabel color={theme.colors.ci}>AVATAR NAME</FormLabel>
      <Editable
        textAlign="center"
        fontSize="xl"
        isPreviewFocusable={false}
        value={avatarName}
        onChange={handleAvatarChange}
        style={{
          display: "flex",
          height: "50%",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          color: theme.colors.white,
          fontSize: theme.fontSizes.xl,
        }}
      >
        <EditablePreview
          style={{
            display: "flex",
            height: "100%",
            width: "80%",
          }}
        />
        {/* Here is the custom input */}
        <Input
          as={EditableInput}
          style={{
            display: "flex",
            height: "100%",
            width: "70%",
            fontSize: theme.fontSizes.sm,
          }}
        />
        <EditableControls />
      </Editable>
    </Flex>
  );
};

export default EditAvatarName;
