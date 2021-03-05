import React from "react";
import { ActivityIndicator } from "react-native";
import { useQuery } from "@apollo/client";

import { GET_EVENTS } from "../../../../gql/query";
import Text from "../../../../components/layouts/Text";
import colors from "../../../../config/colors";
import EventFeed from "../../../../components/events/EventFeed";

const EventFeedScreen = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <ActivityIndicator color={colors.primary} size="large" />;

  if (error) return <Text style={{ color: "red" }}>Error!!</Text>;

  return <EventFeed events={data.Events.events} />;
};

export default EventFeedScreen;
