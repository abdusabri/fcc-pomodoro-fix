import { INCREMENT_SESSION, DECREMENT_SESSION } from "../constants";
import initialState from "../store/initial-state";

export default function sessionLength(
  state = initialState.sessionLength,
  action
) {
  switch (action.type) {
    case INCREMENT_SESSION:
      return action.payload;
    case DECREMENT_SESSION:
      return action.payload;
    default:
      return state;
  }
}
