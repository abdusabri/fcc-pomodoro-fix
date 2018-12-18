import { combineReducers } from "redux";
import breakLength from "./break-length-reducer";
import sessionLength from "./session-length-reducer";

export default combineReducers({
  breakLength,
  sessionLength
});
