import { INCREMENT_SESSION, DECREMENT_SESSION } from "../constants";

export default function sessionLength(state = 5, action) {
  switch (action.type) {
    case INCREMENT_SESSION:
      return action.payload;
    case DECREMENT_SESSION:
      return action.payload;
    default:
      return state;
  }
}
