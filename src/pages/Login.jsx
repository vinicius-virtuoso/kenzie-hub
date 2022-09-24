import { Box } from "@chakra-ui/react";
import React from "react";
import FormLogin from "../components/FormLogin";

import { GrinWrapper } from "./../components/GridContainers/";
import { ContainerContent } from "./../components/ContainerContent";

import ImgLogin from "../assets/login.svg";
import { motion } from "framer-motion";

function Login() {
  return (
    <ContainerContent>
      <GrinWrapper>
        <Box
          as={motion.div}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          d={["none", "none", "none", "initial"]}
          bgImage={ImgLogin}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize={["contain"]}
        ></Box>
        <FormLogin />
      </GrinWrapper>
    </ContainerContent>
  );
}

export default Login;
