import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";

import Form from "./Form";
import FormField from "./FormField";
import ImagePicker from "./ImagePicker";
import SubmitButton from "./SubmitButton";
import OneSportPicker from "../events/OneSportPicker";
import DatePicker from "./datePicker/DatePicker";

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
  eventAvatar: Yup.mixed().label("Event picture"),
  eventDate: Yup.date().min(today).required().label("Event date"),
  location: Yup.string().required().label("Location"), // Waze/Maps to:
  sport: Yup.string().required().label("Event Sport"),
  maxPlayersAmount: Yup.number()
    .required()
    .min(2)
    .max(35)
    .label("Players amount"),
  private: Yup.boolean().required().label("Is the event private?"),
  description: Yup.string().label("Event description"),
  level: Yup.string()
    .oneOf(["begginer, average, expert, pro"])
    .label("What is the athletes level"),
});

const CreateEventForm = () => {
  return (
    <ScrollView style={styles.container}>
      <Form
        initialValues={{
          description: "",
          eventAvatar: "",
          eventDate: today,
          level: "",
          location: "",
          maxPlayersAmount: null,
          private: false,
          sport: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <ImagePicker name="eventAvatar" iconName="account-group-outline" />
        <OneSportPicker userSports={USER_SPORTS_CATERGORIES} name="sport" />
        <DatePicker inputName="eventDate" />
        <FormField
          iconName="crosshairs-gps"
          inputName="location"
          placeholder="Location"
          autoCorrect={false}
          width="50%"
        />
        <FormField
          iconName="account"
          inputName="maxPlayersAmount"
          placeholder="10"
          value={12}
          autoCorrect={false}
          width="50%"
        />
        <SubmitButton text="Create Event" style={{ marginBottom: 40 }} />
      </Form>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 5,
  },
});

export default CreateEventForm;
