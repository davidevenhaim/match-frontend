import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

import IconButton from "../../../layouts/IconButton";

import routes from "../../../../navigation/routes";
import { itemPageSpec } from "../../../../config/theme";
const { ICON_SIZE } = itemPageSpec;

const OwnerHeaderOptions = ({ isConnected = false, iconSize = 35 }) => {
  const navigation = useNavigation();
  const athleteOptions = {
    chat: () => console.log("clicked chat"),
    bell: () => console.log("clicked bell"),
    cog: () => navigation.navigate(routes.MY_SETTINGS),
  };

  return (
    <View style={styles.bottomButtons}>
      {isConnected ? (
        <IconButton
          name={athleteOptions.chat.name}
          onPress={athleteOptions.chat}
          size={iconSize}
        />
      ) : (
        Object.keys(athleteOptions).map((key, index) => (
          <IconButton
            name={key}
            onPress={athleteOptions[key]}
            key={key}
            size={iconSize}
            style={{ marginLeft: index != 0 ? iconSize : 0, marginBottom: 2 }}
          />
        ))
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  bottomButtons: {
    flexDirection: "row",
  },
});

export default OwnerHeaderOptions;
