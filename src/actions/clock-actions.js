import { DECREMENT_TIME_LEFT, PLAY_PAUSE_CLOCK } from "../constants";

export const decrementTimeLeft = timeLeft => ({
  type: DECREMENT_TIME_LEFT,
  payload: timeLeft - 1000
});

export const playPauseClock = isPaused => ({
  type: PLAY_PAUSE_CLOCK,
  payload: !isPaused
});
