import { USER_TECHS_OFF, USER_TECHS_ON } from "./actionsTypes";

export const show_user_techs = (payload) => ({
  type: USER_TECHS_ON,
  payload,
});

export const deletes_user_techs = () => ({
  type: USER_TECHS_OFF,
});
