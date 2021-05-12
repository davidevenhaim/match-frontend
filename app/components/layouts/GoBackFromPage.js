import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import colors from "../../config/colors";

const GoBackFromPage = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.goBackButton}>
      <View>
        <MaterialCommunityIcons name="arrow-left" size={50} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  goBackButton: {
    position: "absolute",
    top: 30,
    left: 10,
    // zIndex: 2,
  },
});

export default GoBackFromPage;
