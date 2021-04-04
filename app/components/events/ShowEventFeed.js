import React, { useState } from "react";
import { FlatList, StyleSheet, RefreshControl } from "react-native";
import { useQuery, NetworkStatus } from "@apollo/client";

import { GET_EVENTS } from "../../api/gql/query";
import ActivityIndicator from "../layouts/ActivityIndicator";
import ErrorIndicator from "../layouts/ErrorIndicator";
import EventInFeed from "./EventInFeed";
import Animated from "react-native-reanimated";

const ShowEventFeed = ({ Header, scrollY, sportFilters, textFilters }) => {

  let { data, error, loading, refetch, networkStatus } = useQuery(
    GET_EVENTS,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only",
    },
  );

  if(networkStatus === NetworkStatus.refetch ) return <ActivityIndicator />;

  if (loading) return <ActivityIndicator />; 
  
  if (error) return <ErrorIndicator />;
  
  // setRefresh(false);
  
  return (
    <>
    <Animated.ScrollView
    refreshControl={<RefreshControl onRefresh={refetch} refreshing={networkStatus === NetworkStatus.refetch} />}
    onScroll={ e => {
      scrollY.setValue(e.nativeEvent.contentOffset.y);
      Animated.event(
        [ { nativeEvent: { contentOffset: scrollY} } ],
        { useNativeDriver: true }
      )
    }}
    scrollEventThrottle={16}
    >
      {data.Events.events.map( event => (
        <EventInFeed event={event} key={event.id} />
      ))}
    </Animated.ScrollView>
      {/* <FlatList
        data={data.Events.events}
        keyExtractor={({ id }) => id.toString()}
        numColumns={1}
        onScroll={ e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
        onRefresh={() => refetch({ sports: ["tennis", "bike"] })}
        refreshing={networkStatus === NetworkStatus.refetch}
        renderItem={({ item }) => <EventInFeed event={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      /> */}
  </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ShowEventFeed;
