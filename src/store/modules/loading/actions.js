import { LOAD_OFF, LOAD_ON } from "./actionsTypes";

export const loading_on = () => ({
  type: LOAD_ON,
});

export const loading_off = () => ({
  type: LOAD_OFF,
});
