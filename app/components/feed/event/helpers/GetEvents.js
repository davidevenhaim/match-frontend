import React, { useState } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import { useSelector } from "react-redux";

import ActivityIndicator from "../../../layouts/ActivityIndicator";
import ErrorIndicator from "../../../layouts/ErrorIndicator";
import ShowFeed from "../../ShowFeed";

import { GET_EVENTS } from "../../../../api/gql/query";

const GetEvents = () => {
  const curAthlete = useSelector((state) => state.userInfo);

  const [sportFilters, setSportFilters] = useState(curAthlete.favoriteSport);
  const [textFilters, setTextFilters] = useState("");

  const { data, error, loading, refetch, networkStatus } = useQuery(
    GET_EVENTS,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only",
    }
  );
  if (loading) return <ActivityIndicator />;

  if (networkStatus === NetworkStatus.refetch) return <ActivityIndicator />;

  if (error) return <ErrorIndicator />;

  return (
    <ShowFeed
      events={data.Events.events}
      curAthlete={curAthlete}
      refetch={refetch}
      sportFilters={sportFilters}
      setSportFilters={setSportFilters}
      textFilters={textFilters}
      setTextFilters={setTextFilters}
    />
  );
};

export default GetEvents;
