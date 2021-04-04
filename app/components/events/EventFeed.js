import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import ShowEventFeed from "./ShowEventFeed";
import EventFeedHeader from './EventFeedHeader';
import Animated from "react-native-reanimated";

const EventFeed = () => {
  const [sportFilters, setSportFilters] = useState([]);
  const [textFilters, setTextFilters] = useState("");
  const [eventsArr, setEventsArr] = useState([]);

  const headerHeight = 200;
  const scrollY = new Animated.Value(0);
  const translateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100]
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

  return (
    <View style={styles.container}>
        <EventFeedHeader
        setSportFilters={setSportFilter}
        setTextFilters={setTextFilters}
        isSelected={isSelected}
        height={headerHeight}
        translateY={translateY}
        />
      <ShowEventFeed
        sportFilters={sportFilters}
        textFilters={textFilters}
        scrollY={scrollY}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  }
});

export default EventFeed;
