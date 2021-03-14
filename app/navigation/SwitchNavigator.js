import { createSwitchNavigator, createAppContainer } from "react-navigation";

import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import Splash from "./Splash";

const SwitchNavigator = createSwitchNavigator(
  {
    Splash: Splash,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: "Splash",
  }
);

export default createAppContainer(SwitchNavigator);
