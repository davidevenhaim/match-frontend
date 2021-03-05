import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import EventInFeed from "./EventInFeed";

const EventFeed = ({ events }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={events}
      keyExtractor={({ id }) => id.toString()}
      style={styles.container}
      renderItem={({ item }) => <EventInFeed event={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
});

export default EventFeed;
