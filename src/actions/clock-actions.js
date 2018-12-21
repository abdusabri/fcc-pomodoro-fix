import {
  DECREMENT_TIME_LEFT,
  PLAY_PAUSE_CLOCK,
  CHANGE_ACTIVE_SESSION
} from "../constants";

export const decrementTimeLeft = (timeLeft, sessionLength, breakLength) => {
  if (timeLeft) {
    return {
      type: DECREMENT_TIME_LEFT,
      payload: timeLeft - 10000
    };
  } else {
    return changeActiveSession(sessionLength, breakLength);
  }
};

export const playPauseClock = isPaused => ({
  type: PLAY_PAUSE_CLOCK,
  payload: !isPaused
});

const changeActiveSession = (sessionLength, breakLength) => ({
  type: CHANGE_ACTIVE_SESSION,
  payload: { sessionLength, breakLength }
});
