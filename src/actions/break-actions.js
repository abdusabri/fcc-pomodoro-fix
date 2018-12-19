import { INCREMENT_BREAK, DECREMENT_BREAK } from "../constants";
import { getValidatedMaxLength, getValidatedMinLength } from "../utils";

export const incrementBreakLength = length => ({
  type: INCREMENT_BREAK,
  payload: getValidatedMaxLength(length + 1)
});

export const decrementBreakLength = length => ({
  type: DECREMENT_BREAK,
  payload: getValidatedMinLength(length - 1)
});
