import React from "react";
import { SafeAreaView } from "react-native";

import EventFeed from "../../../../components/feed/event/helpers/GetEvents";

const EventFeedScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <EventFeed />
    </SafeAreaView>
  );
};

export default EventFeedScreen;
