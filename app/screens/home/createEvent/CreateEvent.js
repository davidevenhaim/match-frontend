import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { NEW_EVENT } from "../../../api/gql/mutation";
import CreateEventForm from "../../../components/forms/event/CreateEventForm";
import SubmitAnimation from "../../../components/layouts/SubmitAnimation";

const CreateEvent = () => {
  const [error, setError] = useState({ message: "", visible: false });
  const [newEvent, { loading }] = useMutation(NEW_EVENT, {
    onCompleted: (data) => console.log(data),
    onError: (error) => setError({ message: error.message, visible: true }),
  });

  return (
    <SubmitAnimation loading={loading} error={error}>
      <CreateEventForm action={newEvent} />
    </SubmitAnimation>
  );
};

export default CreateEvent;
