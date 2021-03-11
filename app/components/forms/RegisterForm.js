import React from "react";
import * as Yup from "yup";

import Form from "./Form";
import FormField from "./FormField";
import FormSportPicker from "./FormSportsPicker";
import ProfileImagePicker from "./ImagePicker";
import SecuredFormField from "./SecuredFormField";
import SportsPickerItem from "../SportsPickerItem";
import SubmitButton from "./SubmitButton";

import sports from "../../config/sports";

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

const RegisterForm = ({ onSubmit }) => {
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
        console.log(values);
        try {
          onSubmit({
            variables: {
              email: values.email,
              username: values.name,
              favoriteSport: values.favoriteSport[0].toUpperCase(),
              password: values.password,
            },
          });
        } catch (error) {
          console.log(error);
        }
      }}
      validationSchema={validationSchema}
    >
      <ProfileImagePicker name="avatar" />
      <FormField
        iconName="email"
        inputName="email"
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <FormField
        iconName="account"
        width="50%"
        inputName="name"
        placeholder="Name"
        autoCompleteType="name"
        textContentType="name"
        autoCorrect={false}
      />
      <SecuredFormField name="password" />
      <FormSportPicker
        name="favoriteSport"
        items={sports.SPORTS_CATERGORIES}
        iconName="form-select"
        inputName="categories"
        numColumns={3}
        placeholder="Categories"
        PickerItemComponent={SportsPickerItem}
      />
      <SubmitButton text="Register" />
    </Form>
  );
};

export default RegisterForm;
