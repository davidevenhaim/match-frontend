import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "../ErrorMessage";
import SportsIconList from "../../layouts/SportsIconList";

import colors from "../../../config/colors";

const EventSportPicker = ({ name, showErrorMessage = false, userSports }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const itemSelected = (sport) => {
    return sport === values[name];
  };

  const onPress = (sport) => {
    setFieldValue(name, sport);
  };
  const isInvalid = touched[name] && errors[name];
  const invalidStyle = {
    borderWidth: 0.9,
    borderColor: colors.danger,
    borderRadius: 200,
  };

  return (
    <>
      <SportsIconList
        userSports={userSports}
        onPress={onPress}
        itemSelected={itemSelected}
        iconSize={40}
        style={isInvalid ? invalidStyle : null}
      />
      {showErrorMessage && (
        <ErrorMessage visible={touched[name]} error={errors[name]} />
      )}
    </>
  );
};

export default EventSportPicker;
