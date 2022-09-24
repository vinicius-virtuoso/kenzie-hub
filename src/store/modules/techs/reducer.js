import { USER_TECHS_OFF, USER_TECHS_ON } from "./actionsTypes";

const initialState = [];

const techsReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TECHS_ON:
      return action.payload;
    case USER_TECHS_OFF:
      return [];
    default:
      return state;
  }
};

export default techsReducer;
