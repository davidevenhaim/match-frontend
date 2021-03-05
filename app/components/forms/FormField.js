import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import TextInput from "./TextInput";

const AppFormField = ({
  iconName,
  iconColor,
  inputName,
  isProtected,
  setIsHidden,
  ...otherProps
}) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <TextInput
        iconName={iconName}
        iconColor={iconColor}
        onBlur={() => setFieldTouched(inputName)}
        onChangeText={handleChange(inputName)}
        isProtected={isProtected}
        setIsHidden={setIsHidden}
        {...otherProps}
      />
      <ErrorMessage visible={touched[inputName]} error={errors[inputName]} />
    </>
  );
};

export default AppFormField;
