import React from "react";
import { ActivityIndicator } from "react-native";
import { useQuery } from "@apollo/client";

import { GET_EVENT } from "../../../../gql/query";
import Text from "../../../../components/layouts/Text";
import colors from "../../../../config/colors";
import EventPage from "../../../../components/events/EventPage";

const EventScreen = ({ route }) => {
  const id = route.params.id;

  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { id },
  });

  if (loading) return <ActivityIndicator color={colors.primary} size="large" />;

  if (error) return <Text style={{ color: "yellow" }}>Error!!</Text>;

  return <EventPage event={data.Event.event} />;
};

export default EventScreen;
