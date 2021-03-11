import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import SportsPickerItem from "./SportsPickerItem";

const OneSportPicker = ({
  userSports,
  onPress,
  itemSelected,
  iconSize,
  style,
}) => {
  return (
    <View>
      <ScrollView
        horizontal
        keyboardDismissMode="on-drag"
        style={style}
        showsHorizontalScrollIndicator={false}
      >
        {userSports.map((sport) => (
          <SportsPickerItem
            item={sport}
            key={sport.toString()}
            onPress={() => onPress(sport)}
            iconSize={iconSize}
            backgroundSize={iconSize * 1.5}
            style={styles.userChoice}
            isSelected={itemSelected(sport)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  userChoice: {
    marginBottom: 15,
    marginTop: 15,
  },
});

export default OneSportPicker;
