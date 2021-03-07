import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ErrorMessage from "../forms/ErrorMessage";

import SportsPickerItem from "../SportsPickerItem";

const OneSportPicker = ({ name, userSports }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const itemSelected = (sport) => {
    return sport === values[name];
  };

  const onPress = (sport) => {
    setFieldValue(name, sport);
  };

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
            id={sport.toString()}
            onPress={() => onPress(sport)}
            iconSize={40}
            backgroundSize={60}
            style={styles.userChoice}
            isSelected={itemSelected(sport)}
          />
        ))}
      </ScrollView>
      <ErrorMessage visible={touched[name]} error={errors[name]} />
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
