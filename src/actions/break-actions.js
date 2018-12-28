import { INCREMENT_BREAK, DECREMENT_BREAK, SET_BREAK } from "../constants";
import {
  getValidatedMaxLength,
  getValidatedMinLength,
  getValueToSetLength
} from "../utils";

export const incrementBreakLength = length => ({
  type: INCREMENT_BREAK,
  payload: getValidatedMaxLength(length + 1)
});

export const decrementBreakLength = length => ({
  type: DECREMENT_BREAK,
  payload: getValidatedMinLength(length - 1)
});

export const setBreakLength = (length, value) => ({
  type: SET_BREAK,
  payload: getValueToSetLength(length, value)
});
