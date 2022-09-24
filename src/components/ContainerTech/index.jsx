import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import CardTech from "../CardTech";

const ContainerTech = () => {
  const { techs } = useSelector((state) => state);

  return (
    <>
      {techs.length > 0 ? (
        <Flex w="100%" h="100%" flex="1" flexDir="column" gap={4}>
          {techs.map((tech, index) => (
            <CardTech key={tech.id} tech={tech} index={index} />
          ))}
        </Flex>
      ) : (
        <Box
          d="flex"
          w="100%"
          h="100%"
          flex="1"
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            letterSpacing={1}
            fontWeight="light"
            fontSize={["1xl", "2xl"]}
          >
            Nenhuma Tecnologia adicionada...
          </Heading>
        </Box>
      )}
    </>
  );
};

export default ContainerTech;
