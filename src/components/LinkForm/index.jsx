import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LinkForm = ({ path, pathText, title, ...props }) => {
  return (
    <Text
      as={motion.p}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1, delay: 0 },
      }}
      textAlign="center"
      mt={2}
      d="flex"
      gap={2}
      w="100%"
      justifyContent="center"
      {...props}
    >
      {title}
      <Box as={Link} to={path} color="purple.300">
        {pathText}
      </Box>
    </Text>
  );
};

export default LinkForm;
