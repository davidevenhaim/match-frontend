import React, { useEffect } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

const ImageInput = ({ imageUri, handleChange, iconName = "face" }) => {
  useEffect(() => {
    askImagePermission();
  }, []);

  const askImagePermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      return Alert.alert(
        "Permission Denied",
        "To continue, you need to enable permission access to the gallery.",
        [{ text: "Ok" }, { text: "Try again", onPress: askImagePermission }]
      );
  };
  const handleImagePress = async () => {
    if (!imageUri) selectImageHandler();
    else
      Alert.alert("Delete", "Are you sure you want to delete the image?", [
        { text: "Yes", onPress: () => handleChange("") },
        { text: "No" },
      ]);
  };
  const selectImageHandler = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!result.cancelled) {
        handleChange(result.uri);
      }
    } catch (error) {
      console.log("Error ", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handleImagePress}>
      <View style={styles.container}>
        {imageUri === "" && (
          <MaterialCommunityIcons
            name={iconName}
            size={45}
            color={colors.mediumGrey}
          />
        )}
        {imageUri !== "" && (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 45,
    backgroundColor: colors.snow,
    height: 90,
    justifyContent: "center",
    overflow: "hidden",
    width: 90,
    borderWidth: 0.2,
    borderColor: colors.mediumGrey,
  },
  icon: {
    backgroundColor: colors.lightGrey,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ImageInput;
