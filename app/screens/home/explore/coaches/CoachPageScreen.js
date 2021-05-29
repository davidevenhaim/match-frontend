import React, { useState } from "react";
import { Alert } from "react-native";
import { useMutation } from "@apollo/client";

import CoachProfile from "../../../../components/feed/coach/profile/CoachProfile";

import { COACH_FEEDBACK } from "../../../../api/gql/mutation";
import { GET_COACH, GET_COACHES } from "../../../../api/gql/query";

const CoachPageScreen = () => {
  const [error, setError] = useState({ message: "", visible: false });

  const [leaveFeedback, { loading }] = useMutation(COACH_FEEDBACK, {
    onCompleted: (data) => {
      console.log(data);
      Alert.alert("", `${data.coachFeedback.alert}`, [
        { text: "Thank You :)", style: "cancel" },
      ]);
    },
    refetchQueries: [{ query: GET_COACH }],
    onError: (err) => setError({ message: err.message, visible: true }),
  });

  return (
    <CoachProfile
      leaveFeedback={{ action: leaveFeedback, error: error, loading: loading }}
    />
  );
};

export default CoachPageScreen;
