import { INCREMENT_BREAK, DECREMENT_BREAK } from "../constants";
import { getValidatedMaxLength, getValidatedMinLength } from "../utils";

export default function breakLength(state = 5, action) {
  switch (action.type) {
    case INCREMENT_BREAK:
      return getValidatedMaxLength(state + 1);
    case DECREMENT_BREAK:
      return getValidatedMinLength(state - 1);
    default:
      return state;
  }
}
