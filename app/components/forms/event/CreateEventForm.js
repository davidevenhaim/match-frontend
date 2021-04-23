import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";

import DatePicker from "../datePicker/DatePicker";
import Form from "../Form";
import FormField from "../FormField";
import ImagePicker from "../ImagePicker";
import SubmitButton from "../SubmitButton";
import Slider from "../Slider";
import EventSportPicker from "./EventSportPicker";

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

const convertValues = (values) => ({
  ...values,
  maxPlayersAmount: isNaN(+values.maxPlayersAmount)
    ? 0
    : +values.maxPlayersAmount,
  eventDate: JSON.parse(JSON.stringify(values.eventDate)),
  // reformating eventDate & playersAmount to the way the BACKEND supports.
});

const CreateEventForm = ({ action }) => (
  <ScrollView style={styles.container}>
    <Form
      initialValues={{
        // avatar: "",
        eventDate: today,
        maxPlayersAmount: 1,
        level: "",
        location: "",
        sport: "",
      }}
      onSubmit={(values) => {
        const newValues = convertValues(values);
        action({
          variables: {
            ...newValues,
          },
        });
      }}
      validationSchema={validationSchema}
    >
      {/* <ImagePicker name="avatar" iconName="account-group-outline" /> 
                  For now, we won't support images on events.
                  Feature - Tested & Ready to work.
      */}
      <EventSportPicker userSports={events.SPORTS_CATERGORIES} name="sport" />
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
        textContentType="addressCity"
        autoCorrect={false}
        width="50%"
      />
      <FormField
        iconName="account"
        inputName="maxPlayersAmount"
        placeholder="10"
        autoCorrect={false}
        keyboardType="numeric"
        width="50%"
        maxLength={2}
        type="number"
        showErrorMessage={true}
        errorMessageStyle={{ left: 30 }}
      />
      <SubmitButton text="Create Event" style={{ marginBottom: 40 }} />
    </Form>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 5,
  },
});

export default CreateEventForm;
