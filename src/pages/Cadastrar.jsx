import { Box } from "@chakra-ui/react";
import React from "react";
import FormCadastrar from "../components/FormCadastrar";

import { GrinWrapper } from "../components/GridContainers";
import { ContainerContent } from "../components/ContainerContent";

import ImgCadastrar from "../assets/welcome.svg";
import { motion } from "framer-motion";

function Cadastrar() {
  return (
    <ContainerContent>
      <GrinWrapper>
        <Box
          as={motion.div}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          d={["none", "none", "none", "initial"]}
          bgImage={ImgCadastrar}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize={["80%"]}
        ></Box>
        <FormCadastrar />
      </GrinWrapper>
    </ContainerContent>
  );
}

export default Cadastrar;
