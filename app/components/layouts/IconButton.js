import React from "react";

import TouchableIcon from "./RoundIconButton";

import colors from "../../config/colors";

const IconButton = ({
  name,
  size = 50,
  onPress,
  iconColor = colors.primary,
  style,
}) => {
  return (
    <TouchableIcon
      name={name}
      backgroundSize={size}
      onPress={onPress}
      style={[{ backgroundColor: null }, style]}
      iconColor={iconColor}
    />
  );
};

export default IconButton;
