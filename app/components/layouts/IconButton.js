import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

const IconButton = ({
  name,
  size = 50,
  onPress,
  iconColor = colors.primary,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={style}>
      <MaterialCommunityIcons name={name} size={size} color={iconColor} />
    </TouchableOpacity>
    /*
    Old styling. check if there are bugs witht the new way.
    // <RoundIconButton
    //   name={name}
    //   backgroundSize={size}
    //   onPress={onPress}
    //   style={[{ backgroundColor: "black" }, style]}
    //   iconColor={iconColor}
    // />
    */
  );
};

export default IconButton;
