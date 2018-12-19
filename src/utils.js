export const getValidatedMaxLength = length => {
  const newLength = length > 60 ? 60 : length;
  return newLength;
};

export const getValidatedMinLength = length => {
  const newLength = length < 0 ? 0 : length;
  return newLength;
};

export const getFormatedTimeLeft = timeLeft => {
  return new Date(timeLeft).toISOString().slice(14, -5); //https://stackoverflow.com/questions/9763441/milliseconds-to-time-in-javascript/9763769
};
