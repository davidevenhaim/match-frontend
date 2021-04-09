import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import ShowEventFeed from "./ShowEventFeed";
import EventFeedHeader from './EventFeedHeader';
import Animated from "react-native-reanimated";

import colors from "../../config/colors";

const EventFeed = () => {
  const [sportFilters, setSportFilters] = useState([]);
  const [textFilters, setTextFilters] = useState("");
  const [eventsArr, setEventsArr] = useState([]);

  const headerHeight = 200;
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [1, headerHeight],
    outputRange: [0, -headerHeight]
  })

  const isSelected = (sport) => {
    return sportFilters.indexOf(sport) >= 0;
  };

  const setSportFilter = (sport) => {
    if (isSelected(sport)) {
      const newSports = sportFilters.filter((sportArr) => sportArr !== sport);
      // need to remove this sport from feed array.
      setSportFilters([...newSports]);
    } else {
      setSportFilters([...sportFilters, sport]);
      // need to add this sport to feed array
    }
  };

  const setEvents = (events) => {
    setEventsArr([...events]);
  };

  const FeedHeader = () => (
      <EventFeedHeader
        setSportFilters={setSportFilter}
        setTextFilters={setTextFilters}
        isSelected={isSelected}
        height={headerHeight}
        translateY={translateY}
      />
  )

  return (
    <View style={styles.container}>
      {/* <EventFeedHeader /> */}
      <ShowEventFeed
        sportFilters={sportFilters}
        textFilters={textFilters}
        scrollY={scrollY}
        Header={FeedHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerHeader: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderLeftWidth: 1,
    borderBottomWidth: 2,
    borderRightWidth: 1,
    borderRightColor: colors.secondary,
    borderBottomColor: colors.secondary,
    borderLeftColor: colors.secondary,
    overflow: "hidden",
    height: 200,
  },
})

export default EventFeed;
