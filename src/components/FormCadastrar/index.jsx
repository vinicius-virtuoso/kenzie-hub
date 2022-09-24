import { useHistory } from "react-router-dom";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import ControlForm from "../ControlForm";
import ButtonForm from "../ButtonForm";
import LinkForm from "./../LinkForm";
import { BoxForm, ContainerForm } from "../ContainerForm";

import api from "../../services/api.js";

function FormCadastrar() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome."),
    email: yup
      .string()
      .required("Digite seu Email.")
      .email("Esse email é invalido"),
    password: yup
      .string()
      .min(8, "Sua senha precisa tem no mínimo 8 caracteres.")
      .required("Digite sua senha."),
    passwordConfirm: yup
      .string()
      .required("Confirmação é obrigatório!")
      .oneOf([yup.ref("password"), null], "As precisam ser iguais"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = ({ name, email, password, course_module }) => {
    const user = {
      name,
      email,
      password,
      course_module,
      bio: "..",
      contact: "..",
    };
    setLoading(true);
    api
      .post("/users", user)
      .then((res) => {
        setLoading(false);
        toast.success("Cadastro efetuado com sucesso!");
        console.log(res);
        localStorage.setItem("@KenzieHUB:User", JSON.stringify(res.data));
        history.push("/login");
        console.log(res);
      })
      .catch((res) => {
        toast.error("Algo deu errado. 😓");
        setLoading(false);
        console.log(res);
      });
  };

  return (
    <ContainerForm title="Cadastre-se">
      <BoxForm onSubmit={handleSubmit(formSubmit)}>
        <ControlForm
          ref="nameCadastrar"
          label="Nome"
          id="name"
          {...register("name")}
          errors={errors}
        />
        <ControlForm
          ref="emailCadastrar"
          label="Email"
          id="email"
          {...register("email")}
          errors={errors}
        />
        <FormControl>
          <FormLabel htmlFor="course_module" fontSize="1xl" letterSpacing={1}>
            Modulo
          </FormLabel>
          <Select
            id="course_module"
            pt={2}
            defaultValue="Primeiro módulo (Introdução ao Frontend)"
            _focus={{ borderColor: "purple.500" }}
            {...register("course_module")}
          >
            <option
              defaultValue
              value="Primeiro módulo (Introdução ao Frontend)"
              style={{ color: "dark" }}
            >
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </Select>
        </FormControl>

        <ControlForm
          ref="senhaCadastrar"
          label="Senha"
          id="password"
          type="password"
          {...register("password")}
          errors={errors}
        />
        <ControlForm
          ref="confirmCadastrar"
          label="Confirme sua senha"
          id="passwordConfirm"
          type="password"
          {...register("passwordConfirm")}
          errors={errors}
        />

        <ButtonForm
          loading={loading}
          loadingText="Criando conta"
          isDirty={isDirty}
        >
          Cadastrar
        </ButtonForm>
      </BoxForm>
      <LinkForm
        title="Ja possui uma conta?"
        pathText="Faça seu Login."
        path={"/login"}
      />
    </ContainerForm>
  );
}

export default FormCadastrar;
