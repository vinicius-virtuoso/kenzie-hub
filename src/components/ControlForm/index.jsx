import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const ControlForm = ({ errors, label, id, ...props }, ref) => {
  return (
    <Box ref={ref}>
      <FormControl
        isInvalid={errors[id]}
        d="flex"
        flexDirection="column"
        w="100%"
      >
        <FormLabel htmlFor={id} fontSize="1xl" letterSpacing={1}>
          {label}
        </FormLabel>
        <Input
          as={motion.input}
          w="100%"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, delay: 0.4 },
          }}
          id={id}
          focusBorderColor="purple.500"
          _hover={{ borderColor: "purple.500" }}
          {...props}
        />
        <FormErrorMessage>{errors[id] && errors[id].message}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default React.forwardRef(ControlForm);
