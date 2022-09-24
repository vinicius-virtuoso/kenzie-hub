import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
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

import * as yup from "yup";
import { useForm } from "react-hook-form";
import SelectsControl from "../SelectsControl";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { get_techs } from "../../store/modules/techs/thunks";

const optionsGroup = [
  { value: "Iniciante" },
  { value: "Intermediário" },
  { value: "Avançado" },
];

const ModalCadastrar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    title: yup.string().required("Tecnologia não pode estar vazia."),
  });
  const {
    register,
    handleSubmit,

    reset,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleSubmitTech = (data) => {
    const token = window.localStorage.getItem("@KenzieHUB:Token");

    if (token) {
      api
        .post("/users/techs", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => {
          toast.success("Tecnologia cadastrado com sucesso!");
          onClose();
          reset();
          dispatch(get_techs());
        })
        .catch(({ response }) => {
          if (response.status === 401) {
            toast.error("Tecnologia ja está cadastrada!");
          } else {
            toast.error("Aconteceu um erro inesperado.");
          }
        });
    } else {
      return <Redirect to="login" />;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        reset();
      }}
      zIndex="999"
    >
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
          Cadastrar Tecnologia
        </ModalHeader>
        <ModalCloseButton
          color="white"
          top={4}
          fontSize="1rem"
          bg="purple.400"
        />
        <ModalBody>
          <Flex gap={4} flexDir="column">
            <FormControl isInvalid={errors.title}>
              <FormLabel>Tecnologia</FormLabel>
              <Input placeholder="Tecnologia..." {...register("title")} />
              <FormErrorMessage>
                {errors.title && errors.title?.message}
              </FormErrorMessage>
            </FormControl>
            <SelectsControl
              label="Nível"
              options={optionsGroup}
              {...register("status")}
            />
          </Flex>
        </ModalBody>

        <ModalFooter w="100%">
          <Button
            colorScheme="purple"
            w="100%"
            letterSpacing={1}
            fontWeight="normal"
            type="submit"
            onClick={handleSubmit(handleSubmitTech)}
          >
            Cadastrar Tecnologia
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalCadastrar;
