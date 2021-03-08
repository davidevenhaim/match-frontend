import React from "react";
import { useQuery } from "@apollo/client";

import { GET_EVENTS } from "../../../../gql/query";
import Text from "../../../../components/layouts/Text";
import EventFeed from "../../../../components/events/EventFeed";
import SearchingIndicator from "../../../../components/layouts/SearchingIndicator";
import ErrorIndicator from "../../../../components/layouts/ErrorIndicator";

const EventFeedScreen = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <SearchingIndicator visible={true} />;
  // if (loading) return <Text>LOading</Text>;

  if (error) return <ErrorIndicator visible={true} />;
  // if (error) return <Text>Error!</Text>;

  return <EventFeed events={data.Events.events} />;
};

export default EventFeedScreen;
