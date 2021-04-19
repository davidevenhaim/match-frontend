import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import SportsPicker from "./SportsPicker";

const AppFormPicker = ({
  name,
  items,
  numColumns,
  PickerItemComponent,
  showErrorMessage = false,
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  let sports = [...values[name]];

  const handleAdd = (item) => {
    setFieldValue(name, [...sports, item]);
  };

  const handleRemove = (item) => {
    sports = sports.filter((curItem) => {
      return curItem !== item;
    });
    setFieldValue(name, [...sports]);
  };

  return (
    <>
      <SportsPicker
        name={name}
        items={items}
        onSelectItem={handleAdd}
        numColumns={numColumns}
        PickerItemComponent={PickerItemComponent}
        onRemoveItem={handleRemove}
      />
      {showErrorMessage && (
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      )}
    </>
  );
};

export default AppFormPicker;
