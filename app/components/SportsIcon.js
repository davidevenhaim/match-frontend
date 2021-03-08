import React from "react";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

import Icon from "./layouts/Icon";

const SportsIcon = ({
  backgroundSize = 80,
  iconSize = backgroundSize / 1.5,
  sport,
  style,
}) => {
  return (
    <Icon
      name={defaultStyles.sportsIcons[sport]}
      style={[
        {
          backgroundColor: colors.sportColors[sport],
          height: backgroundSize,
          width: backgroundSize,
        },
      ]}
      size={iconSize}
    />
  );
};

export default SportsIcon;
