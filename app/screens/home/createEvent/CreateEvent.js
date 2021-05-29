import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import CreateEventForm from "../../../components/forms/event/CreateEventForm";
import SubmitAnimation from "../../../components/layouts/SubmitAnimation";
import { SafeAreaView } from "react-native";
import colors from "../../../config/colors";
import { StyleSheet } from "react-native";

import MapView from "../../../components/feed/event/mapView/MapView";
import { NEW_EVENT } from "../../../api/gql/mutation";
import { GET_MY_EVENTS } from "../../../api/gql/query";

import routes from "../../../navigation/routes";
import GooglePlacesInput from "../../../components/forms/GooglePlacesInput";

const CreateEvent = ({ navigation }) => {
  const [error, setError] = useState({ message: "", visible: false });
  const [newEvent, { loading }] = useMutation(NEW_EVENT, {
    refetchQueries: [{ query: GET_MY_EVENTS }],
    onCompleted: (data) => {
      console.log(data.newEvent.event);
      navigation.navigate(routes.EVENT_SCREEN, { event: data.newEvent.event });
    },
    onError: (error) => setError({ message: error.message, visible: true }),
  });

  return (
    <SafeAreaView style={styles.container}>
      <SubmitAnimation loading={loading} error={error}>
        <CreateEventForm action={newEvent} />
      </SubmitAnimation>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default CreateEvent;
