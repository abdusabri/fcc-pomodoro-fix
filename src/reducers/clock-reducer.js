import initialState from "../store/initial-state";
import {
  DECREMENT_TIME_LEFT,
  PLAY_PAUSE_CLOCK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  CHANGE_ACTIVE_SESSION
} from "../constants";

const MIN_TO_MILLISECONDS = 60000;

export default function clock(state = initialState.clock, action) {
  switch (action.type) {
    case DECREMENT_TIME_LEFT:
      return { ...state, timeLeft: action.payload };
    case PLAY_PAUSE_CLOCK:
      return { ...state, isPaused: action.payload, isFirstPlay: false };
    case INCREMENT_SESSION:
    case DECREMENT_SESSION:
      if (state.isFirstPlay) {
        return { ...state, timeLeft: action.payload * MIN_TO_MILLISECONDS };
      } else {
        return state;
      }
    case CHANGE_ACTIVE_SESSION:
      return {
        ...state,
        activeSession: state.activeSession === "Session" ? "Break" : "Session",
        timeLeft:
          state.activeSession !== "Session"
            ? action.payload.sessionLength * MIN_TO_MILLISECONDS
            : action.payload.breakLength * MIN_TO_MILLISECONDS
      };
    default:
      return state;
  }
}
