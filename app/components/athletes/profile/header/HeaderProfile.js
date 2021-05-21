import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import AthleteAvatar from "../../../layouts/AthleteAvatar";
import ConnectionsList from "../ConnectionsList";
import GetConnectedButton from "./GetConnectedButton";
import AthleteHeaderOptions from "./AthleteHeaderOptions";
import SportsIconList from "../../../layouts/SportsIconList";
import Text from "../../../layouts/Text";

import colors from "../../../../config/colors";
import { itemPageSpec } from "../../../../config/theme";
const { ITEM_HEIGHT, ICON_SIZE, RADIUS, DEVICE_HEIGHT, TEXT_SIZE } =
  itemPageSpec;

const HeaderProfile = ({
  athlete: { connection, name, avatar, favoriteSport, id },
  isOwner,
  toggleShowConnection,
  showConnection,
  isConnected,
}) => {
  const connectionCount = connection.length;
  const iconSize = ICON_SIZE;
  return (
    <View style={styles.conatiner}>
      <View style={styles.avatarStyle}>
        <AthleteAvatar
          athleteName={name}
          athleteImage={avatar}
          size={ICON_SIZE * 1.8}
        />
      </View>
      <Text style={styles.nameText}>{name}</Text>
      <TouchableOpacity onPress={toggleShowConnection}>
        <Text style={styles.connectionText}>
          Connections: {connectionCount}
        </Text>
      </TouchableOpacity>
      <View style={styles.sportContainer}>
        <SportsIconList
          userSports={favoriteSport}
          touch={false}
          iconSize={ICON_SIZE * 0.78}
        />
      </View>
      {showConnection ? (
        <ConnectionsList connections={connection} iconSize={iconSize} />
      ) : isOwner ? (
        <AthleteHeaderOptions iconSize={iconSize} />
      ) : isConnected ? (
        <AthleteHeaderOptions isConnected iconSize={iconSize} />
      ) : (
        <GetConnectedButton id={id} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  avatarStyle: {
    alignItems: "center",
    top: -ICON_SIZE - 5,
    flexShrink: 0.5,
  },
  conatiner: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: colors.snow,
    borderRadius: RADIUS,
    borderWidth: 0.2,
    borderColor: colors.lightGrey,
    height: DEVICE_HEIGHT * 0.2,
    top: ICON_SIZE * 1.5,
    shadowOpacity: 0.3,
    width: "80%",
  },
  connectionText: {
    color: colors.primary,
    fontSize: TEXT_SIZE * 1.1,
  },
  nameText: {
    fontSize: TEXT_SIZE * 1.6,
  },
  sportContainer: {
    alignSelf: "center",
    alignItems: "center",
    flexShrink: 0.45,
  },
});

export default HeaderProfile;
