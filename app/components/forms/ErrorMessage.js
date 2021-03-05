import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../layouts/Text";

import defaultStyles from "../../config/styles";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) {
    return null;
  }
  return <AppText style={styles.message}>{error}</AppText>;
};

const styles = StyleSheet.create({
  message: {
    color: defaultStyles.colors.danger,
    fontSize: 14,
    marginLeft: 30,
  },
});

export default ErrorMessage;
