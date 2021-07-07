import React, { useRef } from "react";
import { Animated, StyleSheet, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/core";

import FeedItem from "../../feed/event/FeedItem";

import routes from "../../../navigation/routes";
import { itemPageSpec } from "../../../config/theme";

const { ITEM_HEIGHT, ITEM_WIDTH, FULL_SIZE, MARGIN } = itemPageSpec;

const UpcomingEvents = ({ events }) => {
  const navigation = useNavigation();

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView>
      <Animated.FlatList
        contentContainerStyle={{ left: MARGIN * 0.4 }}
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
              height={ITEM_HEIGHT * 0.6}
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
const styles = StyleSheet.create({
  container: {},
});

export default UpcomingEvents;
