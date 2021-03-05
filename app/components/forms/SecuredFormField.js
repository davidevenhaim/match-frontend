import React, { useState } from "react";

import FormField from "./FormField";

const SecuredFormField = ({ name, iconName = "lock" }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [rightIconName, setRightIconName] = useState("eye");

  const hiddenHandler = () => {
    setIsHidden(!isHidden);
    if (isHidden) setRightIconName("eye");
    else setRightIconName("eye-off");
  };

  const placeholder = name;

  return (
    <FormField
      iconName={iconName}
      inputName={name}
      placeholder={placeholder}
      textContentType={name}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={isHidden}
      isProtected={true}
      setIsHidden={hiddenHandler}
      rightIconName={rightIconName}
    />
  );
};

export default SecuredFormField;
