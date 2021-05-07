import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import AthleteAvatar from "../../../layouts/AthleteAvatar";
import SportsIconList from "../../../layouts/SportsIconList";
import GetConnectedButton from "./GetConnectedButton";
import OwnerHeaderOptions from "./OwnerHeaderOptions";
import Text from "../../../layouts/Text";

import colors from "../../../../config/colors";

const HeaderProfile = ({
  athlete: { connection, name, avatar, favoriteSport, id },
  isOwner,
  toggleShowConnection,
  isConnected,
}) => {
  const connectionCount = connection.length;
  return (
    <View style={styles.conatiner}>
      <View style={styles.avatarStyle}>
        <AthleteAvatar athleteName={name} athleteImage={avatar} size="large" />
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
          style={{ flexShrink: 1 }}
        />
      </View>
      {isOwner ? (
        <OwnerHeaderOptions />
      ) : isConnected ? (
        <OwnerHeaderOptions isConnected />
      ) : (
        <GetConnectedButton id={id} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  avatarStyle: {
    alignItems: "center",
    top: -40,
    flexShrink: 0.5,
  },
  conatiner: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: colors.snow,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: colors.lightGrey,
    height: 200,
    top: 65,
    shadowOpacity: 0.3,
    width: "80%",
  },
  connectionText: {
    color: colors.primary,
  },
  nameText: {
    marginTop: 15,
    fontSize: 18,
  },
  sportContainer: {
    alignSelf: "center",
    alignItems: "center",
    flexShrink: 0.45,
  },
});

export default HeaderProfile;
