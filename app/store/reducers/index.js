import { combineReducers } from "redux";

import isLoggedReducer from "./isLogged";
import userInfoReducer from "./userInfo";

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  userInfo: userInfoReducer,
});

export default allReducers;
