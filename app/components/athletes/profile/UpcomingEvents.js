import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import EventInFeed from "../../events/EventInFeed";

import routes from "../../../navigation/routes";
import { SafeAreaView } from "react-native";

const UpcomingEvents = ({ events, isOwner }) => {
  const navigation = useNavigation();

  let route = "EVENT_SCREEN";
  if (isOwner) route = "MY_EVENT";

  const ListFooterComponent = () => <View style={{ height: 40 }}></View>;
  return (
    <SafeAreaView>
      <FlatList
        data={events}
        keyExtractor={({ id }) => id.toString()}
        scrollEventThrottle={32}
        renderItem={({ item }) => (
          <EventInFeed
            event={item}
            onPress={() =>
              navigation.navigate(routes[route], { event: item, isOwner })
            }
          />
        )}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default UpcomingEvents;
