import { createStore } from "redux";
import { rootReducer } from "../reducers/root-reducer";
import initialState from "./initial-state";

export default createStore(rootReducer, initialState);
