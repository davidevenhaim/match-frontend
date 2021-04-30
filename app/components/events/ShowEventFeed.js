import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import { useQuery, NetworkStatus } from "@apollo/client";
import { useNavigation } from "@react-navigation/core";
import * as SplashScreen from "expo-splash-screen";

import ActivityIndicator from "../layouts/ActivityIndicator";
import ErrorIndicator from "../layouts/ErrorIndicator";
import EventFeed from "./eventFeed/EventFeed";
import EventInFeed from "./EventInFeed";

import { GET_EVENTS } from "../../api/gql/query";

import routes from "../../navigation/routes";

const ShowEventFeed = ({ Header, sportFilters }) => {
  const navigation = useNavigation();

  const [eventsArr, setEventsArr] = useState([]);

  const { data, error, loading, refetch, networkStatus } = useQuery(
    GET_EVENTS,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only",
    }
  );

  const LoadingStatus = () => (
    <>
      <Header />
      <ActivityIndicator />
    </>
  );

  if (networkStatus === NetworkStatus.refetch) return <LoadingStatus />;

  if (loading) return <LoadingStatus />;

  if (error) {
    console.log(error);
    return <ErrorIndicator />;
  }

  return (
    <>
      <Header />
      <EventFeed events={data.Events.events} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShowEventFeed;

/*
<FlatList
        // horizontal
        data={data.Events.events}
        keyExtractor={({ id }) => id.toString()}
        onRefresh={() => refetch({ sports: sportFilters })}
        refreshing={networkStatus === NetworkStatus.refetch}
        renderItem={({ item }) => (
          <EventInFeed
            event={item}
            onPress={() =>
              navigation.navigate(routes.EVENT_SCREEN, { event: item })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        onEndReachedThreshold={0.2}
        onEndReached={() => {
          console.log("End Reached. fetch more.");
          // getMore();
        }}
      />
*/
