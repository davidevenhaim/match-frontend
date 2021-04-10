import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "../ErrorMessage";
import SportsIconList from "../../layouts/SportsIconList";

const EventSportPicker = ({ name, userSports }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const itemSelected = (sport) => {
    return sport === values[name];
  };

  const onPress = (sport) => {
    setFieldValue(name, sport);
  };

  return (
    <>
      <SportsIconList
        userSports={userSports}
        onPress={onPress}
        itemSelected={itemSelected}
        iconSize={40}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default EventSportPicker;
