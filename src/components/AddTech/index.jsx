import { Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { RiAddLine } from "react-icons/ri";

const AddTech = ({ onOpen }) => {
  return (
    <Flex width="100%" justify="space-between" align="center">
      <Heading
        as="h4"
        fontWeight="normal"
        letterSpacing={1}
        fontSize={["1xl", "1xl", "2xl", "3xl"]}
        color="white"
      >
        Tecnologias
      </Heading>

      <Button
        colorScheme="purple"
        fontSize={["1xl", "2xl", "3xl", "4xl"]}
        fontWeight="bold"
        onClick={onOpen}
      >
        <RiAddLine />
      </Button>
    </Flex>
  );
};

export default AddTech;
