import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import ShowEventFeed from "./ShowEventFeed";
import EventFeedHeader from "./EventFeedHeader";

const EventFeed = () => {
  const [sportFilters, setSportFilters] = useState([]);
  const [textFilters, setTextFilters] = useState("");
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const [eventsArr, setEventsArr] = useState([]);

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
    console.log("setEvents");
    setEventsArr([...events]);
  };

  return (
    <View>
      {isHeaderShown && (
        <EventFeedHeader
          setSportFilters={setSportFilter}
          setTextFilters={setTextFilters}
          isSelected={isSelected}
        />
      )}
      <ShowEventFeed
        sportFilters={sportFilters}
        textFilters={textFilters}
        events={eventsArr}
        setEvents={setEvents}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  logo: {
    alignSelf: "flex-start",
    height: 80,
    width: 60,
    marginTop: 20,
  },
});

export default EventFeed;
