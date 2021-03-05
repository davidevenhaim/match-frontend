import React from "react";
import { TouchableOpacity } from "react-native";

import Icon from "./Icon";

const TouchableIcon = ({ onPress, style, name }) => {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
      <Icon style={style} name={name} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
