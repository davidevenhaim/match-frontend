import React from "react";
import { StyleSheet, View } from "react-native";
import ImageInput from "../../../forms/ImageInput";

import { itemPageSpec } from "../../../../config/theme";
const { ICON_SIZE, MARGIN } = itemPageSpec;

const GALLERY_SIZE = ["face", "arm-flex", "biathlon"]; // 3 images.

const CoachGallery = ({ style }) => {
  return (
    <View style={[{ flexDirection: "row" }, style]}>
      {GALLERY_SIZE.map((iconName, index) => (
        <ImageInput
          inputStyle={{ borderRadius: MARGIN, marginLeft: MARGIN }}
          iconName={iconName}
          handleChange={() => console.log("Hey ", index)} // add photo to the coach's gallery
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({});

export default CoachGallery;
