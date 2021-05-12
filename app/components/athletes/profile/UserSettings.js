import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import IconButton from "../../layouts/IconButton";
import Seperator from "../../layouts/Seperator";
import SwitchWithText from "../../layouts/SwitchWithText";
import Text from "../../layouts/Text";
import RoundIconButtonText from "../../layouts/RoundIconButtonText";

import routes from "../../../navigation/routes";
import colors from "../../../config/colors";

const UserSettings = ({ beCoach, signOut }) => {
  const navigation = useNavigation();

  const [switchValue, setSwitchValue] = useState({
    chatMessages: false,
    eventRequests: true,
    eventReminders: true,
    privateMessages: true,
  });

  const toggleSwitch = (switchName) => {
    const newSwitchState = { ...switchValue };
    newSwitchState[switchName] = !switchValue[switchName];
    setSwitchValue(newSwitchState);
  };

  // defining what options user will be available to change

  const switches = [
    {
      text: "Event chat messages",
      onChange: () => toggleSwitch("chatMessages"),
      value: switchValue.chatMessages,
    },
    {
      text: "Event requests",
      onChange: () => toggleSwitch("eventRequests"),
      value: switchValue.eventRequests,
    },
    {
      text: "Event reminders",
      onChange: () => toggleSwitch("eventReminders"),
      value: switchValue.eventReminders,
    },
    {
      text: "Private messages",
      onChange: () => toggleSwitch("privateMessages"),
      value: switchValue.privateMessages,
    },
  ];

  const buttons = [
    { text: "Sign Out", onPress: signOut, iconName: "logout" },
    { text: "Become Coach", onPress: beCoach, iconName: "whistle" },
  ];

  const info = [
    { text: "Ask a question", path: routes.ASK_QUESTION },
    { text: "F.A.Q", path: routes.FAQ },
    { text: "Privacy Policy", path: routes.PRIVACY_POLICY },
  ];

  return (
    <View>
      <View style={styles.headerContainer}>
        <IconButton
          name="arrow-left"
          onPress={navigation.goBack}
          iconColor={colors.black}
        />
        <Text style={{ fontSize: 20 }}>Settings</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text size={25} style={styles.margin}>
          Push Notifictaion
        </Text>
        <Seperator style={{ marginBottom: 5 }} />
        <FlatList
          data={switches}
          keyExtractor={({ text }) => text.trim().toString()}
          renderItem={({ item }) => (
            <SwitchWithText
              text={item.text}
              value={item.value}
              onValueChange={item.onChange}
            />
          )}
        />
      </View>
      <Seperator style={{ marginBottom: 5 }} />
      <View style={styles.btnContainer}>
        {buttons.map((btn) => (
          <RoundIconButtonText
            key={btn.text.trim().toString()}
            iconName={btn.iconName}
            text={btn.text}
            onPress={btn.onPress}
            backgroundSize={50}
          />
        ))}
      </View>
      <Seperator style={{ marginBottom: 5 }} />
      <View style={styles.moreInfo}>
        <Text size={25} style={styles.margin}>
          Extra info
        </Text>
        <Seperator style={{ marginBottom: 20 }} />
        {info.map((inf) => (
          <TouchableOpacity
            style={styles.moreInfoChilds}
            key={inf.text.trim().toString()}
          >
            <Text size={20} style={styles.infoText}>
              {inf.text}
            </Text>
            <Seperator style={{ marginBottom: 5 }} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  headerBackground: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    flexGrow: 1,
    opacity: 0.25,
    width: "100%",
    height: 8,
    marginBottom: 15,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    left: 30,
    color: colors.mediumGrey,
    // marginBottom: 5,
  },
  margin: {
    margin: 10,
  },
  moreInfo: {
    marginLeft: 10,
    justifyContent: "center",
  },
  moreInfoChilds: {
    marginBottom: 20,
  },
  switchContainer: {
    marginBottom: 15,
  },
});

export default UserSettings;
