import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/client";

import { GET_EVENTS } from "../../api/gql/query";
import ActivityIndicator from "../layouts/ActivityIndicator";
import ErrorIndicator from "../layouts/ErrorIndicator";
import EventInFeed from "./EventInFeed";
import useApi from "../../hooks/useApi";

const ShowEventFeed = ({ sportFilters, setEvents, textFilters }) => {
  const { data, error, loading } = useQuery(GET_EVENTS);

  if (loading) return <ActivityIndicator />;

  if (error) return <ErrorIndicator />;

  const events = data.Events.events;

  let filteredEvents = [];
  if (sportFilters.length) {
    let newEvents = [];
    for (let sport of sportFilters) {
      newEvents = events.filter((event) => {
        return event.sport == sport.toUpperCase();
      });
      filteredEvents = filteredEvents.concat(newEvents);
    }
  }

  return (
    <FlatList
      data={filteredEvents.length ? filteredEvents : events}
      keyExtractor={({ id }) => id.toString()}
      style={styles.container}
      numColumns={1}
      renderItem={({ item }) => <EventInFeed event={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShowEventFeed;
