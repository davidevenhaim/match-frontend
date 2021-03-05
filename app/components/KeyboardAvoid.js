import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

const KeyboardAvoid = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      enabled={false}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoid;
