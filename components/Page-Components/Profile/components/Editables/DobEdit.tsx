import React, { useState } from "react";
import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { editModel } from "../../../../../pages/api/user-api";

interface Props {
  dob: string;
}
interface UserData {
  user: {
    dateOfBirth: string;
  };
}
const EditDOB = (props: Props) => {
  const theme = useTheme();
  const [dateOfBirth, setDateOfBirth] = useState(props.dob);

  let userId = "";
  if (typeof localStorage !== "undefined") {
    const localstoredUser = localStorage.getItem("userData");
    if (localstoredUser !== null) {
      const parsedUser = JSON.parse(localstoredUser);
      userId = parsedUser.user._id;
    }
  }

  const handleDOBChange = async (value: string) => {
    try {
      const res = await editModel({ _id: userId, dateOfBirth: value });
      console.log("res", res);
      if (res.success) {
        // Retrieve the existing user data from local storage
        let userData: UserData = {
          user: {
            dateOfBirth: "",
          },
        };
        if (typeof localStorage !== "undefined") {
          const localstoredUser = localStorage.getItem("userData");
          if (localstoredUser !== null) {
            userData = JSON.parse(localstoredUser);
          }
        }
        userData.user.dateOfBirth = res.user.dateOfBirth;
        // Save the updated user data back to local storage
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("userData", JSON.stringify(userData));
        }
        // Update the dateOfBirth state to reflect the updated value
        setDateOfBirth(res.user.dateOfBirth);
      }
    } catch (e) {
      // Handle error
    }
  };

  const styles = {
    input: {
      height: "100%",
      width: "100%",
      color: theme.colors.white,
      fontSize: theme.fontSizes.xl,
    },
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      height="30%"
      width="100%"
      color={theme.colors.white}
    >
      <FormLabel color={theme.colors.ci}>DATE OF BIRTH</FormLabel>
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        style={styles.input}
        _placeholder={{
          color: theme.colors.ciTrans15,
        }}
        onChange={(e) => handleDOBChange(e.target.value)}
        value={dateOfBirth}
      />
    </Flex>
  );
};

export default EditDOB;
