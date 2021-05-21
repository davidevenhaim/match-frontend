import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import SportsIcon from "./SportsIcon";
import SportsPickerItem from "./SportsPickerItem";

const OneSportPicker = ({
  userSports,
  onPress,
  itemSelected,
  iconSize = 30,
  style,
  touch = true,
}) => {
  return (
    <ScrollView
      horizontal
      keyboardDismissMode="on-drag"
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.scrollContainer, style]}
    >
      {touch
        ? userSports.map((sport) => (
            <SportsPickerItem
              item={sport}
              key={sport.toString()}
              onPress={() => onPress(sport)}
              iconSize={iconSize}
              backgroundSize={iconSize * 1.5}
              style={styles.userChoice}
              isSelected={itemSelected(sport)}
            />
          ))
        : userSports.map((sport) => (
            <SportsIcon
              sport={sport}
              key={sport.toString()}
              iconSize={iconSize}
              backgroundSize={iconSize * 1.5}
              style={styles.userPreview}
            />
          ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userChoice: {
    marginBottom: 15,
    marginTop: 0,
  },
  userPreview: {
    marginLeft: 2,
    alignSelf: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
});

export default OneSportPicker;
