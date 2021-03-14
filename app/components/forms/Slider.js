import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Slider from "@react-native-community/slider";
import { useFormikContext } from "formik";

import Text from "../layouts/Text";

import colors from "../../config/colors";

const AppSlider = ({
  inputName,
  maximumValue,
  stepDetails,
  sliderStyle,
  width,
}) => {
  const { setFieldValue, values } = useFormikContext();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {values[inputName] || "Choose event level"}
      </Text>
      <Slider
        maximumValue={maximumValue}
        maximumTrackTintColor={colors.selected}
        onValueChange={(value) => setFieldValue(inputName, stepDetails[value])}
        minimumTrackTintColor={colors.primary}
        step={1}
        style={[sliderStyle, { width: width }]}
        value={stepDetails.indexOf(values[inputName])}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textTransform: "capitalize",
    color: colors.dark,
  },
});

export default AppSlider;
