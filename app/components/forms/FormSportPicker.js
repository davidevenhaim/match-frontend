import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import SportsPicker from "./SportsPicker";

const AppFormPicker = ({ name, items, numColumns, PickerItemComponent }) => {
  const { errors, setFieldValue, touched } = useFormikContext();

  const handleAdd = (item) => {
    setFieldValue(name, item);
  };

  return (
    <>
      <SportsPicker
        name={name}
        items={items}
        onSelectItem={handleAdd}
        numColumns={numColumns}
        PickerItemComponent={PickerItemComponent}
        selectOneSport={true}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
