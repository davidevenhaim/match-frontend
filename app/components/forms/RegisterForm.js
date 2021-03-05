import React from "react";
import * as Yup from "yup";

import Form from "../../components/forms/Form";
import FormField from "../../components/forms/FormField";
import FormSportPicker from "../../components/forms/FormSportPicker";
import ProfileImagePicker from "../../components/forms/ProfileImagePicker";
import SecuredFormField from "../../components/forms/SecuredFormField";
import SportsPickerItem from "../../components/SportsPickerItem";
import SubmitButton from "../../components/forms/SubmitButton";

const SPORTS_CATERGORIES = [
  "tennis",
  "soccer",
  "basketball",
  "volleyball",
  "bike",
  "running",
];

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

const RegisterForm = () => {
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
        console.log("values");
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
      <FormSportPicker
        name="favoriteSport"
        items={SPORTS_CATERGORIES}
        iconName="form-select"
        inputName="categories"
        numColumns={3}
        placeholder="Categories"
        PickerItemComponent={SportsPickerItem}
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
      <SubmitButton text="Register" style={styles.submitButton} />
    </Form>
  );
};

export default RegisterForm;
