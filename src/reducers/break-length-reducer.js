import { INCREMENT_BREAK, DECREMENT_BREAK, SET_BREAK } from "../constants";
import initialState from "../store/initial-state";

export default function breakLength(state = initialState.breakLength, action) {
  switch (action.type) {
    case INCREMENT_BREAK:
      return action.payload;
    case DECREMENT_BREAK:
      return action.payload;
    case SET_BREAK:
      return action.payload;
    default:
      return state;
  }
}
