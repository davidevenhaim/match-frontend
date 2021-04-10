import React from "react";
import { StyleSheet, View } from "react-native";
import { useMutation } from "@apollo/client";

// import SubmitAnimation from "../../layouts/SubmitAnimation";
// import TouchableIcon from "../../layouts/TouchableIcon";
import RoundIconButtonText from "../../layouts/RoundIconButtonText";

import { TOGGLE_JOIN_EVENT } from "../../../api/gql/mutation";

import colors from "../../../config/colors";

const JoinEvent = ({ id, isParticipant, text }) => {
  const [toggleJoinEvent, { loading }] = useMutation(TOGGLE_JOIN_EVENT);
  return (
    <RoundIconButtonText
      backgroundSize={60}
      iconName="account-multiple-plus"
      onPress={() => toggleJoinEvent({ variables: { id } })}
      text={isParticipant ? "Exit" : "Join"}
    />
  );
};
const styles = StyleSheet.create({});

export default JoinEvent;
