import React from "react";
import * as Yup from "yup";

import Form from "./Form";
import FormField from "./FormField";
import FormSportPicker from "./FormSportsPicker";
import ProfileImagePicker from "./ImagePicker";
import SecuredFormField from "./SecuredFormField";
import SportsPickerItem from "../SportsPickerItem";
import SubmitButton from "./SubmitButton";

import sports from "../../config/events";

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed(),
  email: Yup.string().required().email().label("Email"),
  favoriteSport: Yup.array().min(
    1,
    "Please select at least one sport to continue!"
  ),
  name: Yup.string().required().label("Name"),
  password: Yup.string().required().min(6).matches().label("Password"),
});

const RegisterForm = ({ action }) => {
  return (
    <Form
      initialValues={{
        avatar: "",
        email: "",
        favoriteSport: [],
        name: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values)
        console.log("SignUp Form");
        action({
          variables: {
            ...values,
          },
        });
      }}
      validationSchema={validationSchema}
    >
      <ProfileImagePicker name="avatar" />
      <FormField
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus
        iconName="email"
        inputName="email"
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
      />
      <FormField
        autoCorrect={false}
        autoCompleteType="name"
        iconName="account"
        inputName="name"
        placeholder="Name"
        textContentType="name"
        width="50%"
      />
      <SecuredFormField name="password" />
      <FormSportPicker
        name="favoriteSport"
        iconName="form-select"
        inputName="categories"
        items={sports.SPORTS_CATERGORIES}
        numColumns={3}
        placeholder="Categories"
        PickerItemComponent={SportsPickerItem}
      />
      <SubmitButton text="Register" />
    </Form>
  );
};

export default RegisterForm;
