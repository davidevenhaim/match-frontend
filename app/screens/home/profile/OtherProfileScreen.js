import React from "react";
import { useQuery } from "@apollo/client";

import AthleteProfile from "../../../components/athletes/profile/AthleteProfile";

import { GET_ATHLETE } from "../../../api/gql/query";

const OtherProfileScreen = ({ route }) => {
  const id = route.params.id;

  const { data, error, loading } = useQuery(GET_ATHLETE, {
    variables: { id },
  });

  if (loading) return <AthleteProfile />;

  if (error) return <AthleteProfile error={true} />;

  return <AthleteProfile athlete={data.Athlete} />;
};

export default OtherProfileScreen;
