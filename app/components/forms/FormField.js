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

  const onBlur = () => setFieldTouched(inputName);

  return (
    <>
      <TextInput
        iconName={iconName}
        iconColor={iconColor}
        onBlur={onBlur}
        onChangeText={handleChange(inputName)}
        isProtected={isProtected}
        setIsHidden={setIsHidden}
        touched={touched[inputName]}
        error={errors[inputName]}
        {...otherProps}
      />
      <ErrorMessage visible={touched[inputName]} error={errors[inputName]} />
    </>
  );
};

export default AppFormField;
