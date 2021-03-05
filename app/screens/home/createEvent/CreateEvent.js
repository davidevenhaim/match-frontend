import React from "react";
import { useMutation } from "@apollo/client";

import { NEW_EVENT } from "../../../gql/mutation";
import CreateEventForm from "../../../components/forms/CreateEventForm";
import Text from "../../../components/layouts/Text";

const CreateEvent = () => {
  return <CreateEventForm />;
};

export default CreateEvent;
