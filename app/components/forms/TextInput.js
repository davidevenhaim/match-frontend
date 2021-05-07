import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import AppLoading from "expo-app-loading";

import colors from "../../config/colors";

const AppTextInput = ({
  error,
  fieldSize = 50,
  iconName,
  iconSize = 15,
  isProtected,
  rightIconName,
  setIsHidden,
  style,
  touched,
  width = "90%",
  ...otherProps
}) => {
  let [fontsLoaded] = useFonts({
    "Righteous-font": require("../../assets/fonts/Righteous-Regular.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;

  return (
    <View
      style={[
        styles.frame,
        { width, height: fieldSize },
        touched
          ? {
              borderWidth: 1,
            }
          : null,
        error && touched
          ? {
              borderColor: colors.danger,
            }
          : null,
      ]}
    >
      {iconName && (
        <FontAwesome5
          name={iconName}
          color={error && touched ? colors.danger : colors.mediumGrey}
          style={styles.leftIcon}
          size={iconSize}
        />
      )}
      <TextInput
        placeholderTextColor={colors.mediumGrey}
        style={[styles.textInput, style]}
        {...otherProps}
      />
      {isProtected && (
        <TouchableOpacity style={styles.rightIconArea} onPress={setIsHidden}>
          <FontAwesome5
            name={rightIconName}
            size={iconSize}
            color={colors.mediumGrey}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    backgroundColor: colors.snow,
    borderRadius: 25,
    flexDirection: "row",
    height: 50,
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 10,
    padding: 15,
    borderColor: colors.mediumGrey,
    borderWidth: 0.2,
  },
  leftIcon: {
    marginRight: 15,
  },
  placeholder: {
    color: colors.mediumGrey,
  },
  rightIconArea: {
    height: 40,
    width: 40,
  },
  rightIcon: {
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    fontFamily: "Righteous-font",
  },
});

export default AppTextInput;
