import React, { useRef } from "react";
import { Animated, StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/core";

import FeedItem from "../../feed/event/FeedItem";

import routes from "../../../navigation/routes";
import { itemFeedSpec } from "../../../config/eventFeedTheme";

const { ITEM_WIDTH, FULL_SIZE } = itemFeedSpec;

const UpcomingEvents = ({ events, isOwner }) => {
  const navigation = useNavigation();

  const scrollX = useRef(new Animated.Value(0)).current;

  let route = routes.EVENT_SCREEN.toString();
  if (isOwner) route = routes.MY_EVENT.toString();

  return (
    <SafeAreaView style={{ marginTop: -25 }}>
      <Animated.FlatList
        data={events}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={32}
        snapToInterval={FULL_SIZE}
        renderItem={({ item, index }) => {
          return (
            <FeedItem
              captain={item.captain}
              date={item.eventDate}
              description={item.description}
              index={index}
              name={item.eventName}
              level={item.level}
              location={item.location}
              playersAmount={[item.curPlayersAmount, item.maxPlayersAmount]}
              sport={item.sport}
              scrollX={scrollX}
              onPress={() => navigation.push(route, { event: item })}
            />
          );
        }}
        ListFooterComponent={<View style={{ width: ITEM_WIDTH / 2.58 }} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default UpcomingEvents;
