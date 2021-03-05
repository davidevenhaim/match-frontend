import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import SportsPickerItem from "../SportsPickerItem";

const OneSportPicker = ({ name, userSports }) => {
  const { errors, handleChange, touched } = useFormikContext();
  return (
    <View>
      <ScrollView
        horizontal
        keyboardDismissMode="on-drag"
        style={styles.scrollView}
      >
        {userSports.map((sport) => (
          <SportsPickerItem
            item={sport}
            onPress={() => handleChange(name, sport)}
            iconSize={40}
            backgroundSize={60}
            style={styles.userChoice}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  userChoice: {
    marginBottom: 10,
  },
});

export default OneSportPicker;
