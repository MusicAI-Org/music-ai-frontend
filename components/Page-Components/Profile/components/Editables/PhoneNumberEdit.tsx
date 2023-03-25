/* eslint-disable react/no-children-prop */
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

const EditPhoneNumber = () => {
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
      justifyContent="center"
      height="30%"
      width="100%"
    >
      <FormLabel color={theme.colors.gray}>PHONE NUMBER</FormLabel>
      <Editable
        textAlign="center"
        defaultValue="+91-99973*****"
        fontSize="2xl"
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
          type="tel"
          placeholder="Phone number"
        />

        <EditableControls />
      </Editable>
    </Flex>
  );
};

export default EditPhoneNumber;
