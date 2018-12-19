import { INCREMENT_BREAK, DECREMENT_BREAK } from "../constants";

export default function breakLength(state = 5, action) {
  switch (action.type) {
    case INCREMENT_BREAK:
      return action.payload;
    case DECREMENT_BREAK:
      return action.payload;
    default:
      return state;
  }
}
