import React from "react";
import { useMutation } from "@apollo/client";

import { NEW_EVENT } from "../../../api/gql/mutation";
import CreateEventForm from "../../../components/forms/event/CreateEventForm";

const CreateEvent = () => {
  const [newEvent, { loading, error }] = useMutation(NEW_EVENT, {
    onCompleted: (data) => console.log(data),
    onError: (error) => console.log(error),
  });

  return (
    <CreateEventForm
      action={newEvent}
      actionLoading={loading}
      actionError={error}
    />
  );
};

export default CreateEvent;
