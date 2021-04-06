import { createSwitchNavigator, createAppContainer } from "react-navigation";

import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import routes from "./routes";
import Splash from "./Splash";

const SwitchNavigator = createSwitchNavigator(
  {
    Splash: Splash,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: routes.SPLASH,
  }
);

export default createAppContainer(SwitchNavigator);
