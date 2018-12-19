import initialState from "../store/initial-state";
import { DECREMENT_TIME_LEFT } from "../constants";

export default function clock(state = initialState.clock, action) {
  switch (action.type) {
    case DECREMENT_TIME_LEFT:
      return { ...state, timeLeft: action.payload };
    default:
      return state;
  }
}
