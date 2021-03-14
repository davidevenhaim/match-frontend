import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";

import DatePicker from "../datePicker/DatePicker";
import Form from "../Form";
import FormField from "../FormField";
import ImagePicker from "../ImagePicker";
import SubmitButton from "../SubmitButton";
import Slider from "../Slider";
import OneSportPicker from "./EventSportPicker";

import events from "../../../config/events";

const today = new Date();

const validationSchema = Yup.object().shape({
  avatar: Yup.mixed().label("Event picture"),
  // description: Yup.string().label("Event description"),
  eventDate: Yup.date().min(today).required().label("Event date"),
  level: Yup.string()
    .required("Event needs his level!")
    .oneOf(events.EVENT_LEVELS)
    .label("Athletes level"),
  location: Yup.string().required().label("Location"), // Waze/Maps to:
  maxPlayersAmount: Yup.number()
    .required()
    .min(2)
    .max(35)
    .label("Players amount"),
  // private: Yup.boolean().required().label("Is the event private?"),
  sport: Yup.string().required().label("Event Sport"),
});

const CreateEventForm = ({ action }) => {
  return (
    <ScrollView style={styles.container}>
      <Form
        initialValues={{
          avatar: "",
          // description: "",
          eventDate: today,
          level: "",
          location: "",
          maxPlayersAmount: 1,
          // private: false,
          sport: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          action({
            variables: {
              ...values,
            },
          });
        }}
        validationSchema={validationSchema}
      >
        <ImagePicker name="avatar" iconName="account-group-outline" />
        <OneSportPicker userSports={events.SPORTS_CATERGORIES} name="sport" />
        <DatePicker inputName="eventDate" />
        <Slider
          inputName="level"
          maximumValue={events.EVENT_LEVELS.length - 1} // ( -1 ) because .length starts from 1, slider starts from 0
          stepDetails={events.EVENT_LEVELS}
          width="80%"
        />
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
