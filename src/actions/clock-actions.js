import { DECREMENT_TIME_LEFT } from "../constants";

export const decrementTimeLeft = timeLeft => ({
  type: DECREMENT_TIME_LEFT,
  payload: timeLeft - 1000
});
