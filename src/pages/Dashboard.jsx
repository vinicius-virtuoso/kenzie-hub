import React, { useEffect } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { ContainerContent } from "./../components/ContainerContent";
import Header from "../components/Header";
import ModalContainer from "./../components/ModalContainer";
import AddTech from "../components/AddTech";
import ContainerTech from "../components/ContainerTech";
import { get_techs } from "../store/modules/techs/thunks";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(get_techs());
  }, [dispatch]);

  return (
    <Flex
      boxSize="border-box"
      flexDir="column"
      h="100%"
      w="100%"
      minH="100vh"
      bg="dark"
      flex="1"
    >
      <ModalContainer cadastrar isOpen={isOpen} onClose={onClose} />
      <Header />
      <ContainerContent
        flex="1"
        py={[4, 5, 5, 8]}
        px={[2, 2, 2, 2, 0]}
        alignItems="flex-start"
        flexDir="column"
        gap={8}
      >
        <AddTech onOpen={onOpen} />
        <ContainerTech />
      </ContainerContent>
    </Flex>
  );
};

export default Dashboard;
