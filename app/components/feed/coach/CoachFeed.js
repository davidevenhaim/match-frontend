import React, { useRef, useState, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";

import Text from "../../layouts/Text";

import { itemPageSpec } from "../../../config/theme";
const { ITEM_HEIGHT, ITEM_WIDTH, TEXT_SIZE, SPACING, FULL_SIZE } = itemPageSpec;

import FeedItem from "./FeedItem";
import colors from "../../../config/colors";
import FeedLabel from "../FeedLabel";
import routes from "../../../navigation/routes";

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
    <SafeAreaView style={{ marginTop: -ITEM_WIDTH / 4.5 }}>
      <Animated.FlatList
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
const styles = StyleSheet.create({
  label: {
    backgroundColor: colors.primary,
    borderRadius: ITEM_WIDTH * 0.1,
    height: ITEM_WIDTH * 0.2,
    justifyContent: "center",
    left: SPACING * 0.5,
    marginRight: SPACING * 0.5,
    width: ITEM_WIDTH * 0.25,
  },
  labelText: {
    color: colors.white,
    fontSize: TEXT_SIZE * 1.4,
    textAlign: "center",
  },
});

export default CoachFeed;
