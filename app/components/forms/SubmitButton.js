import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../layouts/Button";

const SubmitButton = ({ text, style }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      text={text}
      onPress={() => {
        handleSubmit();
        console.log("SubmitEventForm");
      }}
      style={[styles.submit, style]}
    />
  );
};

const styles = StyleSheet.create({
  submit: {
    marginTop: 25,
  },
});

export default SubmitButton;
