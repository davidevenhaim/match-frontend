import React from "react";
import { StyleSheet } from "react-native";

import Text from "../layouts/Text";

import colors from "../../config/colors";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) {
    return null;
  }
  return <Text style={styles.message}>{error}</Text>;
};

const styles = StyleSheet.create({
  message: {
    color: colors.danger,
    fontSize: 14,
    textAlign: "center"
  },
});

export default ErrorMessage;
