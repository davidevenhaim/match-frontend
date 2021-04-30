import { defaultAthlete } from "../../config/defaultValues";

const userInfoReducer = (state = defaultAthlete, action) => {
  switch (action.type) {
    case "WRITE":
      return action.payload;
    default:
      return defaultAthlete;
  }
};

export default userInfoReducer;
