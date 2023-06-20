import React from "react";
import { Flex } from "@chakra-ui/react";
import Card from "./Card";
import { Schemes } from "../../../dummy-data/PremiumCards";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
type Props = {
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
};

const CardContainer = (props: Props) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      height="100%"
      width="100%"
    >
      {Schemes.map((scheme) => (
        <Card
          key={scheme.id}
          heading={scheme.heading}
          cost={scheme.cost}
          features={scheme.features}
          height={scheme.height}
          width={scheme.width}
          color={scheme.color}
        />
      ))}
    </Flex>
  );
};
export default CardContainer;
