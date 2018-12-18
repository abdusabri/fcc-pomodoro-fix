export const getValidatedMaxLength = length => {
  const newLength = length > 60 ? 60 : length;
  return newLength;
};

export const getValidatedMinLength = length => {
  const newLength = length < 0 ? 0 : length;
  return newLength;
};
