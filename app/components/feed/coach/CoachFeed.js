import React, { useRef, useState, useEffect } from "react";
import { Animated, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";

import FeedLabel from "../FeedLabel";
import FeedItem from "./FeedItem";

import routes from "../../../navigation/routes";
import { itemPageSpec } from "../../../config/theme";
const { MARGIN, ITEM_WIDTH, FULL_SIZE } = itemPageSpec;

const CoachFeed = ({ coaches, refetch }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const [showLabel, setShowLabel] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    clearTimeout();
    setTimeout(() => setShowLabel(false), 5 * 1000);
  }, [showLabel]);

  const refreshHandler = () => {
    setRefreshing(true);
    console.log("Refreshing!");
    refetch();
    setTimeout(() => setRefreshing(false), 1500);
  };
  return (
    <SafeAreaView style={{ marginTop: -MARGIN * 2 }}>
      <Animated.FlatList
        contentContainerStyle={{ left: MARGIN }}
        data={coaches}
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
              avatar={item.athlete.avatar}
              index={index}
              name={item.athlete.name}
              scrollX={scrollX}
              rating={item.rating}
              ratingCount={item.ratingCount}
              price={item.price}
              onPress={() =>
                navigation.push(routes.COACH_PROFILE, { coach: item })
              }
              sports={item.coachingSport}
            />
          );
        }}
        ListFooterComponent={<View style={{ width: ITEM_WIDTH * 0.4 }} />}
        ListHeaderComponent={<FeedLabel text="Coach Feed" />}
      />
    </SafeAreaView>
  );
};

export default CoachFeed;
