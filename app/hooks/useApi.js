import { useQuery } from "@apollo/client";

import query from "../api/gql/query";

export default useApi = (queryName) => {
  const { data, error, loading, fetchMore } = useQuery(query[queryName]);

  console.log("useApi");

  return {
    data,
    error,
    loading,
    fetchMore,
  };
};
