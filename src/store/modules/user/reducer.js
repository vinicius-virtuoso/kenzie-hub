import { USER_LOGIN, USER_LOGOUT } from "./actionsTypes";

const initialState = {
  token: window.localStorage.getItem("@KenzieHUB:Token") || "",
  user: JSON.parse(window.localStorage.getItem("@KenzieHUB:User")) || {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.payload;
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
