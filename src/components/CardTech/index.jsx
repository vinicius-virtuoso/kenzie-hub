import { Flex, Text, useDisclosure } from "@chakra-ui/react";

import { motion } from "framer-motion";
import React from "react";
import ModalContainer from "../ModalContainer";

const CardTech = ({ tech, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const container = {
    hidden: { opacity: 0, transform: { translateY: -30, scale: 1 } },
    show: {
      opacity: 1,
      transform: { scale: 1, transform: "initial" },
      transition: {
        delay: index / 10,

        delayChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Flex
      as={motion.div}
      id={tech.id}
      justify="space-between"
      border="1px solid"
      borderColor="gray.400"
      py={[5]}
      px={[4]}
      shadow="dark-lg"
      color="white"
      transition="all 0.4s ease"
      _hover={{ transform: "scale(1.01)" }}
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0 }}
      rounded={4}
      cursor="pointer"
      onClick={onOpen}
    >
      <Text as={motion.p} variants={item}>
        {tech.title}
      </Text>
      <Text as={motion.p} variants={item}>
        {tech.status}
      </Text>
      <ModalContainer editar isOpen={isOpen} onClose={onClose} tech={tech} />
    </Flex>
  );
};

export default CardTech;
