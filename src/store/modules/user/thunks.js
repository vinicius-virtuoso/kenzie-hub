import api from "../../../services/api";
import { toast } from "react-toastify";
import { login_user, logout_user } from "./actions";
import { loading_on, loading_off } from "./../loading/actions";
import { deletes_user_techs } from "../techs/actions";

export const login_user_thunk = (payload) => (dispatch) => {
  dispatch(loading_on());
  api
    .post("/sessions ", payload)
    .then(({ data }) => {
      dispatch(loading_off());
      toast.success("Login efetuado com sucesso!", { theme: "dark" });
      localStorage.setItem("@KenzieHUB:Token", data.token);
      localStorage.setItem("@KenzieHUB:User", JSON.stringify(data.user));

      const modifiedState = { token: data.token, user: data.user };
      dispatch(login_user(modifiedState));
    })
    .catch((_) => {
      toast.error("Email o senha errados. 😓", { theme: "dark" });
      dispatch(loading_off());
    });
};

export const logout_user_thunk = (payload) => (dispatch) => {
  dispatch(loading_on());
  dispatch(logout_user());
  dispatch(deletes_user_techs());
  dispatch(loading_off());
};
