import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

import IconButton from "../../../layouts/IconButton";

import routes from "../../../../navigation/routes";

const OwnerHeaderOptions = ({ isConnected = false }) => {
  const navigation = useNavigation();

  const userOptions = {
    chat: () => console.log("clicked chat"),
    bell: () => console.log("clicked bell"),
    cog: () => navigation.navigate(routes.MY_SETTINGS),
  };

  return (
    <View style={styles.bottomButtons}>
      {isConnected ? (
        <IconButton name={userOptions.chat.name} onPress={userOptions.chat} />
      ) : (
        Object.keys(userOptions).map((key) => (
          <IconButton name={key} onPress={userOptions[key]} key={key} />
        ))
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default OwnerHeaderOptions;
