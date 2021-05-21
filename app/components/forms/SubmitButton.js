import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../layouts/Button";
import Erro from "../layouts/Text";
import ErrorMessage from "./ErrorMessage";
import colors from "../../config/colors";

const SubmitButton = ({ error, text, style }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <>
      <AppButton
        text={text}
        onPress={handleSubmit}
        style={[
          styles.submit,
          error
            ? error.visible
              ? { backgroundColor: colors.danger }
              : null
            : null,
          style,
        ]}
      />
      {error && (
        <ErrorMessage
          error={error.message}
          visible={error.visible}
          style={{ alignSelf: "center", marginTop: 5 }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  submit: {
    marginTop: 25,
  },
});

export default SubmitButton;
