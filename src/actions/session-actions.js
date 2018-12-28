import {
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  SET_SESSION
} from "../constants";
import {
  getValidatedMaxLength,
  getValidatedMinLength,
  getValueToSetLength
} from "../utils";

export const incrementSessionLength = length => ({
  type: INCREMENT_SESSION,
  payload: getValidatedMaxLength(length + 1)
});

export const decrementSessionLength = length => ({
  type: DECREMENT_SESSION,
  payload: getValidatedMinLength(length - 1)
});

export const setSessionLength = (length, value) => ({
  type: SET_SESSION,
  payload: getValueToSetLength(length, value)
});
