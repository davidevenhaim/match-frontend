import React from "react";
import { StyleSheet, View } from "react-native";
import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/core";

// import SubmitAnimation from "../../layouts/SubmitAnimation";
// import TouchableIcon from "../../layouts/TouchableIcon";
import RoundIconButtonText from "../../layouts/RoundIconButtonText";

import { TOGGLE_JOIN_EVENT } from "../../../api/gql/mutation";
import {
  GET_EVENTS,
  GET_MY_CONNECTIONS,
  GET_MY_EVENTS,
  GET_ME,
} from "../../../api/gql/query";

import routes from "../../../navigation/routes";

const JoinEvent = ({
  event,
  isParticipant,
  text,
  size = 60,
  ...otherProps
}) => {
  const navigation = useNavigation();
  let navigateTo = () =>
    navigation.navigate(routes.EVENTS_FEED, {
      variables: { event, isParticipant },
    });

  if (isParticipant) {
    navigateTo = () => navigation.navigate(routes.MY_PROFILE);
  }

  const [toggleJoinEvent] = useMutation(TOGGLE_JOIN_EVENT, {
    refetchQueries: [
      // { query: GET_EVENTS },
      { query: GET_ME },
      // { query: GET_MY_EVENTS },
      // { query: GET_MY_CONNECTIONS },
    ],
    onCompleted: navigateTo,
  });

  let iconName = "account-multiple-plus";
  // if (loading) {
  //   iconName = "electron-framework";
  //   setTimeout(() => null, 10000);
  // }

  return (
    <RoundIconButtonText
      backgroundSize={size}
      iconName={iconName}
      onPress={() => toggleJoinEvent({ variables: { id: event.id } })}
      text={isParticipant ? "Exit" : "Join"}
      {...otherProps}
    />
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default JoinEvent;
