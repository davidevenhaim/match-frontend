import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";

import AthleteProfile from "../../../components/athletes/profile/AthleteProfile";

import { GET_ATHLETE } from "../../../api/gql/query";
import { UPDATE_ATHLETE_EVENTS } from "../../../api/gql/mutation";

const OtherProfileScreen = ({ route }) => {
  const id = route.params.id;

  const { data, error, loading } = useQuery(GET_ATHLETE, {
    variables: { id },
  });

  const [updateEvents, { loadingEvents, eventsError }] = useMutation(
    UPDATE_ATHLETE_EVENTS
  );

  // useEffect(() => {
  //   updateEvents({
  //     variables: {
  //       id,
  //     },
  //   });
  // }, []);

  if (loading) return <AthleteProfile />;

  if (error) return <AthleteProfile error={error} />;

  return (
    <AthleteProfile athlete={data.Athlete} loadingEvents={loadingEvents} />
  );
};

export default OtherProfileScreen;
