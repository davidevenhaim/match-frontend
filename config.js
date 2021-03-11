// credit to Alex Martinez & Peter Piekarczyk for Environment configuration inspiration
// https://medium.com/@peterpme/environment-variables-in-expo-using-release-channels-4934594c5307
// https://alxmrtnz.com/thoughts/2019/03/12/environment-variables-and-workflow-in-expo.html
import Constants from "expo-constants";

// get the localhost ip address at runtime using the Expo manifest
// this enables both simulator and physical device debugging with our local api
let localhost;
if (Constants.manifest.debuggerHost) {
  localhost = Constants.manifest.debuggerHost.split(":").shift();
}
// API_URI: `http://localhost:4000/api`,
// set environment variables
const ENV = {
  dev: {
    API_URI: "http://localhost:4000/api",
  },
  prod: {
    // update the API_URI value with your publicly deployed API address
    API_URI:
      "mongodb+srv://ZiTex:fvtlowcsufh@roll.iwjl7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
};

// Api KEY = c3c74e6b-3d09-45df-9816-3b27998725cb

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // __DEV__ is set to true when react-native is running locally in dev mode
  // __DEV__ is set to false when our app is published
  if (__DEV__) {
    return ENV.dev;
  } else if (env === "prod") {
    return ENV.prod;
  }
};

export default getEnvVars;
