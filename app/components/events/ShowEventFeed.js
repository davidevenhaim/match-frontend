import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, RefreshControl } from "react-native";
import { useQuery, NetworkStatus } from "@apollo/client";
import { useNavigation } from "@react-navigation/core";

import ActivityIndicator from "../layouts/ActivityIndicator";
import ErrorIndicator from "../layouts/ErrorIndicator";
import EventInFeed from "./EventInFeed";

import { GET_EVENTS } from "../../api/gql/query";

import routes from "../../navigation/routes";

const ShowEventFeed = ({ Header, sportFilters }) => {
  const navigation = useNavigation();

  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [eventsArr, setEventsArr] = useState([]);
  const [scrollPosition, setScrollPosition] = useState("");

  let { data, error, loading, refetch, networkStatus, fetchMore } = useQuery(
    GET_EVENTS,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only",
      onCompleted: (data) => {
        setScrollPosition(data.Events.cursor);
        addEventHandler(data.Events.events);
      },
    }
  );

  const LoadingStatus = () => (
    <>
      <Header />
      <ActivityIndicator />
    </>
  );

  const getMore = async () => {
    setIsLoadingMore(true);
    console.log(data.cursor);
    await fetchMore({
      variables: {
        cursor: scrollPosition,
      },
    });
    setIsLoadingMore(false);
  };

  if (networkStatus === NetworkStatus.refetch) return <LoadingStatus />;

  if (loading) return <LoadingStatus />;

  if (error) {
    console.log(error);
    return <ErrorIndicator />;
  }

  const addEventHandler = (events) => {
    setEventsArr(() => {
      return [...events];
    });
  };

  return (
    <>
      <Header />
      <FlatList
        data={eventsArr}
        keyExtractor={({ id }) => id.toString()}
        numColumns={1}
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShowEventFeed;
