import initialState from "../store/initial-state";
import { DECREMENT_TIME_LEFT, PLAY_PAUSE_CLOCK } from "../constants";

export default function clock(state = initialState.clock, action) {
  switch (action.type) {
    case DECREMENT_TIME_LEFT:
      return { ...state, timeLeft: action.payload };
    case PLAY_PAUSE_CLOCK:
      return { ...state, isPaused: action.payload };
    default:
      return state;
  }
}
