export const getValidatedMaxLength = length => {
  const newLength = length > 60 ? 60 : length;
  return newLength;
};

export const getValidatedMinLength = length => {
  const newLength = length < 1 ? 1 : length;
  return newLength;
};

const MAX_TIME_LEFT_VAL = 3600000;

export const getFormatedTimeLeft = timeLeft => {
  if (timeLeft === MAX_TIME_LEFT_VAL) {
    return "60:00";
  } else {
    return new Date(timeLeft).toISOString().slice(14, -5); //https://stackoverflow.com/questions/9763441/milliseconds-to-time-in-javascript/9763769
  }
};

export const getValueToSetLength = (length, value) => {
  const digitRegEx = /[0-9]+/g;
  const matchedValue = Number(value.match(digitRegEx));
  if (matchedValue !== 0) {
    const numValue = Number(matchedValue);
    return numValue > 60 ? 60 : numValue;
  } else {
    return length;
  }
};
