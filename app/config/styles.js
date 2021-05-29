import { Platform } from "react-native";

import colors from "./colors";
import font from "../assets/fonts/AppFont";

export default {
  appText: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  colors,
  appFont: font,
  sportsIcons: {
    // will define "MaterialCommunityIcon" name for each sport.
    bike: "bike",
    basketball: "basketball",
    handball: "handball",
    hockey: "hockey-sticks",
    gym: "weight-lifter",
    matkot: "table-tennis",
    running: "shoe-print",
    soccer: "soccer",
    surfing: "snowboard",
    swimming: "swim",
    tennis: "tennis",
    volleyball: "volleyball",
    default: "emoticon-sad-outline",
  },
};
