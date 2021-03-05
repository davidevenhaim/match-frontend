import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Form from "./Form";
import FormField from "./FormField";
import FormSportPicker from "./FormSportPicker";
import ProfileImagePicker from "./ImagePicker";
import SportsPickerItem from "../SportsPickerItem";
import SubmitButton from "./SubmitButton";
import SportPicker from "../events/OneSportPicker";

const today = new Date();

const USER_SPORTS_CATERGORIES = [
  "tennis",
  "soccer",
  "basketball",
  "volleyball",
  "bike",
  "running",
];

const validationSchema = Yup.object().shape({
  date: Yup.date()
    .max(today)
    .required("Every event should have a date!")
    .label("Event date"),
  eventAvatar: Yup.mixed().label("Event picture"),
  location: Yup.string().required().label("Name"), // Waze to:
  sport: Yup.string().required().label("Event Sport"),
  playersAmount: Yup.number().required().min(2).max(35).label("Players amount"),
  private: Yup.boolean().required().label("Is the event private?"),
  description: Yup.string().label("Event description"),
});

const CreateEventForm = () => {
  return (
    <Form
      initialValues={{
        eventAvatar: "",
        date: today,
        location: "",
        sport: "",
        playersAmount: 12,
        private: false,
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <ProfileImagePicker name="eventAvatar" />
      <FormField
        iconName="gps"
        inputName="location"
        placeholder="Location"
        autoCorrect={false}
        width="50%"
      />
      <FormField
        iconName="account"
        inputName="playersAmount"
        placeholder="10"
        autoCorrect={false}
        width="50%"
      />
      <SportPicker userSports={USER_SPORTS_CATERGORIES} name="sport" />
      <FormField
        iconName="account"
        inputName="playersAmount"
        placeholder="10"
        autoCorrect={false}
        width="50%"
      />
      <SubmitButton text="Create Event" />
    </Form>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CreateEventForm;
