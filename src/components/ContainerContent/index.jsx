import { Flex } from "@chakra-ui/react";

export const ContainerContent = ({ children, ...props }) => {
  return (
    <Flex
      boxSize="border-box"
      maxWidth="1220px"
      w="100%"
      height="100%"
      m="0 auto"
      px={[2, 4, 4, 0]}
      {...props}
    >
      {children}
    </Flex>
  );
};
