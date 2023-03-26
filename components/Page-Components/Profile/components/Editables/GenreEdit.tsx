import React from "react";
import { Flex, FormLabel, HStack, Input } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const EditGenre = () => {
  const theme = useTheme();
  const genreArray = ["Romantic", "Rock", "Hip Hop", "Jazz"];

  const styles = {
    pinInput: {
      width: "25%",
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
      <HStack width="100%" height="100%" marginTop={theme.space[3]}>
        {Array(4)
          .fill("")
          .map((_, i) => (
            <Input
              key={i}
              style={styles.pinInput}
              textAlign="center"
              _placeholder={{
                color: theme.colors.ciTrans15,
              }}
              placeholder={genreArray[i]}
            />
          ))}
      </HStack>
    </Flex>
  );
};

export default EditGenre;
