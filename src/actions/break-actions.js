import { INCREMENT_BREAK, DECREMENT_BREAK } from "../constants";

export const incrementBreakLength = () => ({
  type: INCREMENT_BREAK
});

export const decrementBreakLength = () => ({
  type: DECREMENT_BREAK
});
