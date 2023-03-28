import React from "react";
import { Flex, FormLabel, IconButton, Input, Spinner } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { stableDiffusionApi } from "../../../../../pages/api/stable-diffusion";

const GenerateProfilePic = (props: any) => {
  const theme = useTheme();
  const [value, setValue] = React.useState("");
  const [imageURL, setImageURL] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setValue(event.target.value);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const data = await stableDiffusionApi(value);
      setImageURL(data.image);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  props.setProfilePic(imageURL);

  return (
    <Flex
      flexDirection={"column"}
      alignItems="flex-start"
      justifyContent="flex-start"
      height="30%"
      width="100%"
    >
      <FormLabel color={theme.colors.ci}>GENERATE AI PROFILE IMAGE</FormLabel>
      <Flex height="100%" width="100%" justifyContent="space-between">
        <Input
          value={value}
          onChange={handleChange}
          placeholder="eg.an astronaut riding a dog on mars artstation hd lighting"
          _placeholder={{
            color: theme.colors.ciTrans15,
          }}
          size="sm"
          style={{
            height: "3vh",
            width: "85%",
            color: theme.colors.white,
            fontSize: theme.fontSizes.h4,
            margin: `${theme.space[3]} 0`,
            padding: `${theme.space[4]} 0`,
            paddingLeft: theme.space[1],
            border: `1px solid ${theme.colors.ciDark}`,
            borderRadius: theme.borderRadius.md,
          }}
        />
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
            margin: `${theme.space[3]} 0`,
          }}
          onClick={handleGenerate}
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

export default GenerateProfilePic;
