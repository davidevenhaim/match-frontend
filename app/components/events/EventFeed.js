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
      numColumns={2}
      renderItem={({ item }) => <EventInFeed event={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

export default EventFeed;
