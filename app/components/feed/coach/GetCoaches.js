import React from "react";
import { useQuery } from "@apollo/client";

import CoachFeed from "./CoachFeed";

import { GET_COACHES } from "../../../api/gql/query";

const GetCoaches = () => {
  const { data, error, loading, refetch } = useQuery(GET_COACHES);

  if (loading) return null;

  if (error) return console.log(error);

  return <CoachFeed coaches={data.Coaches.coaches} refetch={refetch} />;
};

export default GetCoaches;
