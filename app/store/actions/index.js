export const signUser = () => {
  return {
    type: "SIGN",
  };
};

export const writeInfo = (athlete) => {
  return {
    type: "WRITE",
    payload: athlete,
  };
};
