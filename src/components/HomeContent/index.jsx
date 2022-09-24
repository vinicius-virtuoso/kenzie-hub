import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import { MyButton } from "../Buttons";
import { Logo } from "../Logos";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HomeContent = () => {
  return (
    <Flex
      h="100%"
      maxW="auto"
      justify="center"
      align="center"
      direction="column"
      px={[2, 8, 16]}
      py={[4, 8, 16]}
    >
      <Box
        maxW={["100%", "100%", "100%", "auto"]}
        d="flex"
        flexDir="column"
        align="center"
        justify={["center", "flex-start"]}
        textAlign={["center", "center", "center", "left"]}
      >
        <Logo />
        <Text
          as={motion.p}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          color="gray.500"
          fontWeight="light"
          letterSpacing={1}
          fontSize={["1xl", "2xl", "4xl", "2xl"]}
        >
          Portfólios de programadores da Kenzie.
        </Text>
        <Flex
          justify={["center", "center", "center", "center", "flex-start"]}
          w="100%"
          gap={[4, 5]}
          mt={[4, 5]}
        >
          <MyButton primary path="/cadastrar">
            Crie sua conta
          </MyButton>
          <MyButton secondary path="/login">
            Login
          </MyButton>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HomeContent;
