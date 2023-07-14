import React from "react";
import { Button, Collapse, Flex, Text, useTheme } from "@chakra-ui/react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileName from "./ProfileName";
/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

const MainTab = (): JSX.Element => {
  const theme = useTheme();
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  const styles = {
    heading: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.xl2,
    },
    text: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.lg,
    },
  };
  return (
    <Flex
      height={"100%"}
      width={"100%"}
      alignItems="flex-start"
      justifyContent={"space-around"}
      flexDirection={"column"}
    >
      <Flex
        height={"33%"}
        width={"100%"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          height={"33%"}
          width={"70%"}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Text style={styles.heading}>
            Hall of Fame - Electric Guitar - Version 1
          </Text>
        </Flex>
        <Flex
          width={"30%"}
          height={"33%"}
          alignItems="center"
          justifyContent="space-around"
        >
          {/* profile */}
          <ProfileAvatar />
          <ProfileName />
        </Flex>
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems="flex-start"
        justifyItems={"center"}
      >
        {/* description */}
        <Collapse startingHeight={20} in={show} style={styles.text}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </Collapse>
        <Button
          size="sm"
          onClick={handleToggle}
          mt="1rem"
          style={{
            backgroundColor: theme.colors.transparent,
            border: `1px solid ${theme.colors.ci}`,
            padding: theme.space[2],
          }}
        >
          Show {show ? "Less" : "More"}
        </Button>
      </Flex>
    </Flex>
  );
};
export default MainTab;
