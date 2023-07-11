import React from "react";
import { Flex, FormLabel, Text, VStack } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

const EditGenre = (props: any) => {
  const theme = useTheme();
  const genreArray = props?.genre;

  const styles = {
    genreText: {
      width: "23%",
      height: "100%",
      fontSize: theme.fontSizes.xl2,
      border: `1px solid ${theme.colors.ciDark}`,
      color: theme.colors.white,
      padding: "2vh",
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <Flex
      direction={"column"}
      alignItems="flex-start"
      justifyContent="flex-start"
      height="30%"
      width="100%"
      margin={`${theme.space[2]} 0`}
    >
      <FormLabel color={theme.colors.ci} fontSize={theme.fontSizes.xl1}>
        GENRE
      </FormLabel>
      <VStack
        width="100%"
        height="100%"
        marginTop={theme.space[3]}
        flexDirection={"row"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        {genreArray?.map(
          (
            genre:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined,
            index: React.Key | null | undefined
          ) => (
            <Text
              key={index}
              style={styles.genreText}
              textAlign="center"
              _placeholder={{
                color: theme.colors.ciTrans15,
              }}
            >
              {genre}
            </Text>
          )
        )}
      </VStack>
    </Flex>
  );
};

export default EditGenre;
