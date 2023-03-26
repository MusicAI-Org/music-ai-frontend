import React from "react";
import {
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormLabel,
  Input,
  useEditableControls,
} from "@chakra-ui/react";
import { TiTick } from "react-icons/ti";
import { AiOutlineRollback } from "react-icons/ai";
import { useTheme } from "@chakra-ui/react";

const EditName = () => {
  const theme = useTheme();
  /* Here's a custom control */
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

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm" height="100%" width="20%">
        <Button {...getSubmitButtonProps()} style={styles.button}>
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
      height="30%"
      width="100%"
    >
      <FormLabel color={theme.colors.ci}>NAME</FormLabel>
      <Editable
        textAlign="center"
        defaultValue="Paarth Jain"
        fontSize="xl"
        isPreviewFocusable={false}
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
          _placeholder={{
            color: theme.colors.ciTrans15,
          }}
        />
        <EditableControls />
      </Editable>
    </Flex>
  );
};

export default EditName;
