import React, { useEffect, useState } from "react";

import ActivityIndicator from "../layouts/ActivityIndicator";
import CoachFeed from "./coach/CoachFeed";
import EventFeed from "./event/EventFeed";
import FeedHeader from "./FeedHeader";

import { filterEvents } from "./event/helpers/filterEvents";

const headerHeight = 200;

const ShowEventFeed = ({
  events,
  setSportFilters,
  sportFilters,
  textFilters,
  setTextFilters,
}) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [eventsArr, setEventsArr] = useState(events);

  const Header = () => (
    <FeedHeader
      setSportFilters={setSportFilter}
      setTextFilters={setTextFilters}
      isSelected={isSelected}
      height={headerHeight}
    />
  );

  useEffect(() => {
    setIsLoadingMore(true);

    const filteredEvents = filterEvents(events, { sportFilters, textFilters });
    setEventsArr(filteredEvents);

    setIsLoadingMore(false);
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
      <Header />
      <EventFeed events={eventsArr} />
      <CoachFeed />
    </>
  );
};
export default ShowEventFeed;
