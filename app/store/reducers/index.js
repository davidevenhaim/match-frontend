import { combineReducers } from "redux";

import isLoggedReducer from "./isLogged";
import userInfoReducer from "./userInfo";
import tabBarVisibleReducer from "./tabBarVisible";

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  userInfo: userInfoReducer,
  tabBarVisible: tabBarVisibleReducer,
});

export default allReducers;
