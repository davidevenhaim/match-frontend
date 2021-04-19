import React from "react";

import RoundIconButton from "./RoundIconButton";

import colors from "../../config/colors";

const IconButton = ({
  name,
  size = 50,
  onPress,
  iconColor = colors.primary,
  style,
}) => {
  return (
    <RoundIconButton
      name={name}
      backgroundSize={size}
      onPress={onPress}
      style={[{ backgroundColor: null }, style]}
      iconColor={iconColor}
    />
  );
};

export default IconButton;
