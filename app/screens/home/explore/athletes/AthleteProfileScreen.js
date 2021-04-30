import React from "react";

import AthleteProfile from "../../../../components/athletes/profile/AthleteProfile";

import { GET_ATHLETE } from "../../../../api/gql/query";
import { useQuery } from "@apollo/client";

const AthleteProfileScreen = ({ route }) => {
  const { id } = route.params;

  const { loading, data, error } = useQuery(GET_ATHLETE, {
    variables: { id },
  });

  // Showing the default athlete preview page.
  if (loading || error) return <AthleteProfile />;

  return <AthleteProfile athlete={data.Athlete} />;
};

export default AthleteProfileScreen;
