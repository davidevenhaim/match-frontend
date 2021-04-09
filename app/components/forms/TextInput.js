import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

const AppTextInput = ({
  iconName,
  isProtected,
  rightIconName,
  setIsHidden,
  style,
  width,
  touched,
  error,
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
        { width: width || "90%" },
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
        <MaterialCommunityIcons
          name={iconName}
          color={error && touched ? colors.danger : colors.mediumGrey}
          style={styles.leftIcon}
          size={20}
        />
      )}
      <TextInput
        placeholderTextColor={colors.mediumGrey}
        style={[styles.textInput, style]}
        {...otherProps}
      />
      {isProtected && (
        <TouchableOpacity style={styles.rightIconArea} onPress={setIsHidden}>
          <MaterialCommunityIcons
            name={rightIconName}
            size={20}
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
