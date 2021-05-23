import React, { useEffect, useState } from "react";

import ActivityIndicator from "../layouts/ActivityIndicator";
import CoachFeed from "./coach/GetCoaches";
import EventFeed from "./event/EventFeed";
import FeedHeader from "./FeedHeader";

import { filterEvents } from "./event/helpers/filterEvents";

import { itemPageSpec } from "../../config/theme";

const { HEADER_HEIGHT } = itemPageSpec;

const ShowEventFeed = ({
  events,
  setSportFilters,
  sportFilters,
  textFilters,
  setTextFilters,
  refetch,
}) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [eventsArr, setEventsArr] = useState(events);

  useEffect(() => {
    const filteredEvents = filterEvents(events, { sportFilters, textFilters });

    setEventsArr(filteredEvents);
  }, [sportFilters, textFilters]);

  const LoadingStatus = () => (
    <>
      <Header />
      <ActivityIndicator />
    </>
  );

  const isSelected = (sport) => sportFilters.indexOf(sport) >= 0;

  const setSportFilter = (sport) => {
    setIsLoadingMore(true);
    if (isSelected(sport)) {
      const newSports = sportFilters.filter((sportArr) => sportArr !== sport);
      setSportFilters([...newSports]);
    } else {
      setSportFilters([...sportFilters, sport]);
    }
    const filteredEvents = filterEvents(events, { sportFilters, textFilters });

    setEventsArr(filteredEvents);
    setIsLoadingMore(false);
  };

  if (isLoadingMore) {
    return <LoadingStatus />;
  }

  return (
    <>
      <FeedHeader
        setSportFilters={setSportFilter}
        setTextFilters={setTextFilters}
        isSelected={isSelected}
        height={HEADER_HEIGHT}
      />
      <EventFeed events={eventsArr} refetch={refetch} />
      <CoachFeed />
    </>
  );
};

export default ShowEventFeed;
