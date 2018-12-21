import initialState from "../store/initial-state";
import { DECREMENT_TIME_LEFT, PLAY_PAUSE_CLOCK } from "../constants";
import { INCREMENT_SESSION, DECREMENT_SESSION } from "../constants";

export default function clock(state = initialState.clock, action) {
  switch (action.type) {
    case DECREMENT_TIME_LEFT:
      return { ...state, timeLeft: action.payload };
    case PLAY_PAUSE_CLOCK:
      return { ...state, isPaused: action.payload, isFirstPlay: false };
    case INCREMENT_SESSION:
    case DECREMENT_SESSION:
      if (state.isFirstPlay) {
        return { ...state, timeLeft: action.payload * 60000 };
      } else {
        return state;
      }
    default:
      return state;
  }
}
