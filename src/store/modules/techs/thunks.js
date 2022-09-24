import api from "../../../services/api";
import { loading_off, loading_on } from "../loading/actions";
import { show_user_techs } from "./actions";
import { toast } from "react-toastify";
const token = localStorage.getItem("@KenzieHUB:Token");

export const get_techs = (payload) => (dispatch, getState) => {
  const { user } = getState();
  dispatch(loading_on());
  api
    .get(`/users/${user.user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      dispatch(loading_off());
      const listTechs = [...data.techs];
      dispatch(show_user_techs(listTechs));
    })
    .catch(() =>
      toast.error("Error inesperado na requisição de suas tecnologias")
    );
};
