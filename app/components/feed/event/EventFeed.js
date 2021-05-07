import React, { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";

import FeedItem from "./FeedItem";

import { itemFeedSpec } from "../../../config/eventFeedTheme";
const { ITEM_HEIGHT, ITEM_WIDTH, RADIUS, SPACING, FULL_SIZE } = itemFeedSpec;

import routes from "../../../navigation/routes";

const EventFeed = ({ events }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Animated.FlatList
        contentContainerStyle={{ paddingBottom: 100 }}
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
              onPress={() =>
                navigation.navigate(routes.EVENT_SCREEN, { event: item })
              }
            />
          );
        }}
        ListFooterComponent={<View style={{ width: ITEM_WIDTH / 2.58 }} />}
      />
    </SafeAreaView>
  );
};

export default EventFeed;
