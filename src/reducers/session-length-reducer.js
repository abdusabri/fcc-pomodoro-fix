import { INCREMENT_SESSION, DECREMENT_SESSION } from "../constants";
import { getValidatedMaxLength, getValidatedMinLength } from "../utils";

export default function sessionLength(state = 5, action) {
  switch (action.type) {
    case INCREMENT_SESSION:
      return getValidatedMaxLength(state + 1);
    case DECREMENT_SESSION:
      return getValidatedMinLength(state - 1);
    default:
      return state;
  }
}
