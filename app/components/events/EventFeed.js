import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import EventInFeed from "./EventInFeed";
import Screen from "../Screen";

import colors from "../../config/colors";

const EventFeed = ({ events }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={events}
      keyExtractor={({ id }) => id.toString()}
      numColumns={1}
      style={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("EventScreen", { event: item })}
        >
          <EventInFeed event={item} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
});

export default EventFeed;
