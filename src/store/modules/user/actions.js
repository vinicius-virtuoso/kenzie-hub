import { USER_LOGIN, USER_LOGOUT } from "./actionsTypes";

export const login_user = (payload) => ({
  type: USER_LOGIN,
  payload,
});
export const logout_user = () => ({
  type: USER_LOGOUT,
});
