import { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

import LinkForm from "../LinkForm";
import ControlForm from "../ControlForm";
import ButtonForm from "../ButtonForm";
import { ContainerForm, BoxForm } from "../ContainerForm";

import { login_user_thunk } from "../../store/modules/user/thunks";
import { useDispatch, useSelector } from "react-redux";

function FormLogin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state);

  useEffect(() => {
    if (user?.user?.id) {
      history.push("/dashboard");
    }
  }, [user?.user?.id]);

  const formSchema = yup.object().shape({
    email: yup.string().email("Email invalido.").required("Digite seu Email."),
    password: yup
      .string()
      .min(8, "Senha contem no mínimo 8 caracteres")
      .required("Digite sua senha."),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = (data) => {
    dispatch(login_user_thunk(data));
  };

  return (
    <ContainerForm title="Entre com sua conta">
      <BoxForm onSubmit={handleSubmit(formSubmit)}>
        <ControlForm
          ref="emailLogin"
          label="Email"
          id="email"
          {...register("email")}
          errors={errors}
        />
        <ControlForm
          ref="passwordLogin"
          label="Senha"
          id="password"
          type="password"
          {...register("password")}
          errors={errors}
        />

        <ButtonForm
          loading={loading}
          loadingText="Entrando..."
          isDirty={isDirty}
        >
          Entrar
        </ButtonForm>
      </BoxForm>
      <LinkForm
        title="Não possui uma conta?"
        pathText="Faça seu Cadastro."
        path={"/cadastrar"}
      />
    </ContainerForm>
  );
}

export default FormLogin;
