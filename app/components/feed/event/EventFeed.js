import React, { useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";

import FeedItem from "./FeedItem";

import { itemPageSpec } from "../../../config/theme";
const { ITEM_HEIGHT, ITEM_WIDTH, RADIUS, SPACING, FULL_SIZE } = itemPageSpec;

import routes from "../../../navigation/routes";

const EventFeed = ({ events, refetch }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);

  const refreshHandler = () => {
    setRefreshing(true);
    console.log("Refreshing!");
    refetch();
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <SafeAreaView style={{ marginTop: -25 }}>
      <Animated.FlatList
        data={events}
        decelerationRate="fast"
        horizontal
        // onRefresh={refreshHandler}
        // refreshing={refreshing}
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
                navigation.push(routes.EVENT_SCREEN, { event: item })
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
