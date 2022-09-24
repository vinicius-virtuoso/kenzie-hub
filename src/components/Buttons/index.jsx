import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export const MyButton = ({
  primary,
  secondary,
  children,
  path,
  onClick,
  minW,
  maxW,
  minH,
  maxH,
  py,
  px,
  ...props
}) => {
  const history = useHistory();

  if (primary) {
    return (
      <Button
        as={motion.button}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        boxSize="border-box"
        onClick={onClick ? onClick : () => history.push(path)}
        minW={minW ? minW : [120, 120, 190, 200]}
        maxW={maxW ? maxW : [120, 120, 190, 200]}
        maxH={maxH ? maxH : [40, 30, "30px"]}
        minH={minH ? minH : [4, 30, "100%"]}
        colorScheme="purple"
        fontSize={["1xl", "2xl"]}
        fontWeight="medium"
        letterSpacing={1}
        // color="white"
        border="2px solid transparent"
        shadow="xl"
        py={py ? py : [2, 4, 7]}
        px={px ? px : [2, 4, 6]}
        {...props}
      >
        {children}
      </Button>
    );
  } else if (secondary) {
    return (
      <Button
        as={motion.button}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        boxSize="border-box"
        onClick={onClick ? onClick : () => history.push(path)}
        h="100%"
        minW={minW ? minW : [120, 120, 190, 200]}
        maxW={maxW ? maxW : [120, 120, 190, 200]}
        maxH={maxH ? maxH : [40, 30, "30px"]}
        minH={minH ? minH : [4, 30, "100%"]}
        colorScheme="purple"
        fontSize={["1xl", "2xl"]}
        fontWeight="medium"
        letterSpacing={1}
        // color="orange.500"
        borderWidth={2}
        shadow="xl"
        py={py ? py : [2, 4, 7]}
        px={px ? px : [2, 4, 6]}
        variant="outline"
        {...props}
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        as={motion.button}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        boxSize="border-box"
        onClick={onClick ? onClick : () => history.push(path)}
        minW={minW ? minW : [120, 120, 190, 200]}
        maxW={maxW ? maxW : [120, 120, 190, 200]}
        maxH={maxH ? maxH : [40, 30, "30px"]}
        minH={minH ? minH : [4, 30, "100%"]}
        colorScheme="purple"
        fontSize={["1xl", "2xl"]}
        fontWeight="medium"
        letterSpacing={1}
        // color="white"
        border="2px solid transparent"
        shadow="xl"
        py={py ? py : [2, 4, 7]}
        px={px ? px : [2, 4, 6]}
        {...props}
      >
        {children}
      </Button>
    );
  }
};
