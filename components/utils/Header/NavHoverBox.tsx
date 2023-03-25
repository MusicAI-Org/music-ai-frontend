/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React from "react";
import { Flex, Heading, Text, Icon, useTheme } from "@chakra-ui/react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const NavHoverBox = ({ title, icon, description }: any) => {
  const theme = useTheme();
  return (
    <Container>
      <Flex
        pos="absolute"
        mt="calc(100px - 7.5px)"
        ml="-10px"
        width={0}
        height={0}
        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight={`10px solid ${theme.colors.grayBorderBox}`}
      />
      <Flex
        h={200}
        w={200}
        flexDir="column"
        alignItems="center"
        justify="center"
        backgroundColor={theme.colors.grayBorderBox}
        borderRadius="10px"
        color={theme.colors.white}
        textAlign="center"
        padding={theme.space[4]}
      >
        <Icon as={icon} fontSize="3xl" mb={4} />
        <Heading size="md" fontWeight="normal">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Flex>
    </Container>
  );
};

export default NavHoverBox;
