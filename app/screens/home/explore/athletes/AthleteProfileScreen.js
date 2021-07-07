import React from "react";
import { useQuery } from "@apollo/client";

import AthleteProfile from "../../../../components/athletes/profile/AthleteProfile";

import { GET_ATHLETE } from "../../../../api/gql/query";

const AthleteProfileScreen = ({ route }) => {
  const id = route.params.id;
  const { loading, data, error } = useQuery(GET_ATHLETE, {
    variables: { id },
  });

  // Showing the default athlete preview page.
  if (loading) return null; // <AthleteProfile />;

  if (error) return <AthleteProfile error={true} />;

  return <AthleteProfile athlete={data.Athlete} />;
};

export default AthleteProfileScreen;
