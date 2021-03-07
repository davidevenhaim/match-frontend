import React, { useState } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { useFormikContext } from "formik";
import { format } from "date-fns";

import DatePickerIOS from "./DatePickerIOS";
import DatePickerAndroid from "./DatePickerAndroid";
import TouchableIcon from "../../layouts/TouchableIcon";
import Text from "../../layouts/Text";
import colors from "../../../config/colors";

const DatePicker = ({ inputName }) => {
  const {
    setFieldValue,
    errors,
    values,
    setFieldTouched,
    touched,
  } = useFormikContext();

  const [showPicker, setShowPicker] = useState(false);
  const [showMode, setShowMode] = useState("date");
  const onChange = (newDate) => {
    setShowPicker(Platform.OS === "ios");
    setFieldValue(inputName, newDate);
  };

  const showDatePicker = () => {
    setShowMode("date");
    setShowPicker(true);
    setFieldTouched(inputName);
  };

  const showTimePicker = () => {
    setShowMode("time");
    setShowPicker(true);
    setFieldTouched(inputName);
  };

  return (
    <>
      <View style={styles.pickerIcons}>
        <TouchableIcon
          name="calendar"
          onPress={showDatePicker}
          backgroundSize={60}
        />
        <TouchableIcon
          name="clock"
          onPress={showTimePicker}
          backgroundSize={60}
        />
      </View>
      {Platform.OS === "ios" ? (
        <DatePickerIOS
          date={values[inputName]}
          onSubmit={(newDate) => onChange(newDate)}
          showMode={showMode}
          showPicker={showPicker}
          setShowPicker={() => setShowPicker(!showPicker)}
        />
      ) : (
        <DatePickerAndroid
          date={values[inputName]}
          onSubmit={(newDate) => onChange(newDate)}
          showMode={showMode}
          showPicker={showPicker}
        />
      )}
      {touched[inputName] && (
        <Text style={styles.dateText}>
          {format(values[inputName], "EEEE MMMM do")} at{" "}
          {format(values[inputName], "HH:mm a")}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dateText: {
    textAlign: "center",
    color: colors.primary,
    marginBottom: 20,
  },
  pickerIcons: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default DatePicker;

/*
Because of the major differences in platforms beahviours,
datePicker is unique for every platform
*/
