import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Form from "./Form";
import FormField from "./FormField";
import SecuredFormField from "./SecuredFormField";
import SubmitButton from "./SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).matches().label("Password"),
});

const LogInForm = () => {
  return (
    <Form
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      <FormField
        iconName="email"
        inputName="email"
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <SecuredFormField name="password" />
      <SubmitButton text="Log In" width="80%" style={styles.submitButton} />
    </Form>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    width: "80%",
  },
});

export default LogInForm;
