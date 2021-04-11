import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import EventInFeed from "../../events/EventInFeed";

import routes from "../../../navigation/routes";

const UpcomingEvents = ({ events, isOwner }) => {
  const navigation = useNavigation();
  const ListFooterComponent = () => <View style={{ height: 40 }}></View>;
  return (
    <FlatList
      data={events}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => (
        <EventInFeed
          event={item}
          onPress={() =>
            navigation.navigate(routes.MY_EVENT, { event: item, isOwner })
          }
        />
      )}
      ListFooterComponent={ListFooterComponent}
    />
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default UpcomingEvents;
