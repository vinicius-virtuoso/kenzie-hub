import { Box, Heading } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

export const Logo = ({ fontSize }) => {
  return (
    <Heading
      as={Link}
      to="/"
      color="white"
      fontWeight="normal"
      fontSize={fontSize ? fontSize : ["5xl", "7xl"]}
    >
      Kenzie{" "}
      <Box as="span" color="purple.400">
        Hub
      </Box>
    </Heading>
  );
};
