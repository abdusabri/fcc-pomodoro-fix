import { INCREMENT_SESSION, DECREMENT_SESSION } from "../constants";

export const incrementSessionLength = () => ({
  type: INCREMENT_SESSION
});

export const decrementSessionLength = () => ({
  type: DECREMENT_SESSION
});
