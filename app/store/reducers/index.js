import { combineReducers } from "redux";

import isLoggedReducer from "./isLogged";
import userInfoReducer from "./userInfo";
import tabBarVisibleReducer from "./tabBarVisible";
import appLanguageReducer from "./appLanguage";

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  userInfo: userInfoReducer,
  tabBarVisible: tabBarVisibleReducer,
  coachView: false,
  appLanguage: appLanguageReducer,
});

export default allReducers;
