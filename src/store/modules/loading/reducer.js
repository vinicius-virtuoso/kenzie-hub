import { LOAD_OFF, LOAD_ON } from "./actionsTypes";
const initialState = false;

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ON:
      return true;
    case LOAD_OFF:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
