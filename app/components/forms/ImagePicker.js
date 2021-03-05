import React from "react";
import { useFormikContext } from "formik";

import ImageInput from "../ImageInput";

const ImagePicker = ({ name }) => {
  const { handleChange, setFieldTouched, values } = useFormikContext();

  return (
    <ImageInput
      imageUri={values[name]}
      handleChange={handleChange(name)}
      onBlur={() => setFieldTouched(name)}
    />
  );
};

export default ImagePicker;
