const tabBarVisibleReducer = (state = false, action) => {
  switch (action.type) {
    case "WRITE":
      return false;
    default:
      return true;
  }
};

export default tabBarVisibleReducer;
