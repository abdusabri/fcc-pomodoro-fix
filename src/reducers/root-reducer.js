import { appReducer } from "./combined-reducers";
import { RESET } from "../constants";

export const rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = undefined;
  }

  return appReducer(state, action);
};
