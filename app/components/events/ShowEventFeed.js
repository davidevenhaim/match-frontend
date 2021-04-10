import React, { useState } from "react";
import { FlatList, StyleSheet, View, RefreshControl } from "react-native";
import { useQuery, NetworkStatus } from "@apollo/client";
import { useNavigation } from "@react-navigation/core";

import ActivityIndicator from "../layouts/ActivityIndicator";
import ErrorIndicator from "../layouts/ErrorIndicator";
import EventInFeed from "./EventInFeed";

import { GET_EVENTS } from "../../api/gql/query";

import routes from "../../navigation/routes";

const ShowEventFeed = ({ Header, scrollY, sportFilters, textFilters }) => {
  const navigation = useNavigation();

  let { data, error, loading, refetch, networkStatus } = useQuery(GET_EVENTS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });

  const LoadingStatus = () => (
    <>
      <Header />
      <ActivityIndicator />
    </>
    // search for a better solution.
  );

  if (networkStatus === NetworkStatus.refetch) return <LoadingStatus />;

  if (loading) return <LoadingStatus />;

  if (error) return <ErrorIndicator />;

  console.log(sportFilters.length);

  return (
    <>
      <Header />
      <FlatList
        data={data.Events.events}
        keyExtractor={({ id }) => id.toString()}
        numColumns={1}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
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
        ListFooterComponent={<View style={{ marginBottom: 30 }} />} // For the last list element
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShowEventFeed;
