export const signUser = () => {
  return {
    type: "SIGN",
  };
};

export const writeUserInfo = (athlete) => {
  return {
    type: "WRITE",
    payload: athlete,
  };
};

export const tabBarVisible = (isVisible) => {
  return {
    type: "WRITE",
    payload: isVisible,
  };
};
