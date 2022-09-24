import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import SelectsControl from "../SelectsControl";
import api from "../../services/api";
import { toast } from "react-toastify";

import { Redirect } from "react-router-dom";
import { get_techs } from "../../store/modules/techs/thunks";
import { useDispatch } from "react-redux";

const optionsGroup = [
  { value: "Iniciante" },
  { value: "Intermediário" },
  { value: "Avançado" },
];

const ModalEditar = ({ isOpen, onClose, tech }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();
  const token = window.localStorage.getItem("@KenzieHUB:Token");

  const handleSubmitTech = (data) => {
    if (token) {
      api
        .put(`/users/techs/${tech.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          console.log(data);
          toast.success("Alterações salvas com sucesso!");
          onClose();
          dispatch(get_techs());
        })
        .catch((_) => {
          toast.error("Não foi possível editar a tecnologia");
        });
    } else {
      return <Redirect to="login" />;
    }
  };

  const removeTech = () => {
    if (token) {
      api
        .delete(`/users/techs/${tech.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => {
          toast.warning(`Tecnologia ${tech.title.toUpperCase()} foi excluída.`);
          reset();
          onClose();
          dispatch(get_techs());
        })
        .catch((_) => {
          toast.error("Não foi possível excluir a tecnologia");
        });
    } else {
      return <Redirect to="login" />;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} zIndex="999">
      <ModalOverlay />
      <ModalContent
        alignSelf="center"
        bg="dark"
        rounded="0"
        maxW={["90%", "90%", "500px"]}
      >
        <ModalHeader
          bg="purple.300"
          letterSpacing={1}
          fontWeight="normal"
          color="white"
        >
          Detalhes da Tecnologia
        </ModalHeader>
        <ModalCloseButton
          color="white"
          top={4}
          fontSize="1rem"
          bg="purple.400"
        />
        <ModalBody>
          <Flex gap={4} flexDir="column">
            <FormControl>
              <FormLabel>Tecnologia</FormLabel>
              <Input
                defaultValue={tech.title}
                pointerEvents="none"
                opacity="0.5"
              />
            </FormControl>
            <SelectsControl
              defaultValue={tech.status}
              label="Nível"
              options={optionsGroup}
              {...register("status")}
            />
          </Flex>
        </ModalBody>

        <ModalFooter w="100%" gap="5">
          <Button
            colorScheme="purple"
            w="100%"
            letterSpacing={1}
            fontWeight="light"
            type="submit"
            onClick={handleSubmit(handleSubmitTech)}
          >
            Salvar alterações
          </Button>
          <Button
            colorScheme="red"
            w="45%"
            fontWeight="light"
            letterSpacing={1}
            type="submit"
            onClick={removeTech}
          >
            Excluir
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEditar;
