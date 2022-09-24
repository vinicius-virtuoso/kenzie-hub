import React from "react";
import { Box } from "@chakra-ui/react";
import HomeContent from "./../components/HomeContent";

import { GrinWrapper } from "../components/GridContainers";
import { ContainerContent } from "../components/ContainerContent";

import ImgHome from "../assets/logo-vector.svg";
import { motion } from "framer-motion";

export function Home() {
  return (
    <ContainerContent>
      <GrinWrapper>
        <HomeContent />
        <Box
          as={motion.div}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          d={["none", "none", "none", "initial"]}
          bgImage={ImgHome}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgSize={["contain"]}
        ></Box>
      </GrinWrapper>
    </ContainerContent>
  );
}
