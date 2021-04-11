import React from "react";
import { StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";

import ActivityIndicator from "../../../components/layouts/ActivityIndicator";
import ErrorIndicator from "../../../components/layouts/ErrorIndicator";

import { GET_ME } from "../../../api/gql/query";
import AthleteProfile from "../../../components/athletes/profile/AthleteProfile";

const MyProfileScreen = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) {
    return (
      <>
        <AthleteProfile />
        <ActivityIndicator style={styles.indicator} />
      </>
    );
  }

  if (error) {
    return (
      <>
        <AthleteProfile />
        <ErrorIndicator style={styles.indicator} />
      </>
    );
  }

  return (
    <AthleteProfile athlete={data.Me} isOwner={true} navigation={navigation} />
  );
};

const styles = StyleSheet.create({
  indicator: {
    top: -100,
  },
});

export default MyProfileScreen;
