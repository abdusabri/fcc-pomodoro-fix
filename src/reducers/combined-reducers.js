import { combineReducers } from "redux";
import breakLength from "./break-length-reducer";
import sessionLength from "./session-length-reducer";

export const appReducer = combineReducers({
  breakLength,
  sessionLength
});
