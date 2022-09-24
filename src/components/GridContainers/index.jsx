import { Grid } from "@chakra-ui/react";
import React from "react";

export const GrinWrapper = ({ children }) => {
  return (
    <Grid
      w="100%"
      minH="100vh"
      alignContent="center"
      justifyContent="center"
      gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
    >
      {children}
    </Grid>
  );
};
