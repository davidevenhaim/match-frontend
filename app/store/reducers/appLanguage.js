const tabBarVisibleReducer = (state = "en", action) => {
  switch (action.type) {
    case "WRITE":
      return "en";
    default:
      return "he";
  }
};

export default tabBarVisibleReducer;
