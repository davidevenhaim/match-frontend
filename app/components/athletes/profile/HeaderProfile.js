import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { useMutation } from "@apollo/client";

import AthleteAvatar from "../../layouts/AthleteAvatar";
import Button from "../../layouts/Button";
import IconButton from "../../layouts/IconButton";
import SportsIconList from "../../layouts/SportsIconList";
import Text from "../../layouts/Text";

import { GET_CONNECTED } from "../../../api/gql/mutation";
import { GET_MY_CONNECTIONS } from "../../../api/gql/query";

import colors from "../../../config/colors";
import routes from "../../../navigation/routes";

const HeaderProfile = ({
  athlete: { connection, name, avatar, favoriteSport, id },
  isOwner,
  toggleShowConnection,
}) => {
  const navigation = useNavigation();

  const [getConnected, { loading }] = useMutation(GET_CONNECTED, {
    variables: { id },
    refetchQueries: [{ query: GET_MY_CONNECTIONS }],
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const userOptions = {
    chat: () => console.log("clicked chat"),
    bell: () => console.log("clicked bell"),
    cog: () => navigation.navigate(routes.MY_SETTINGS),
  };

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
        <View style={styles.bottomButtons}>
          {Object.keys(userOptions).map((key) => (
            <IconButton name={key} onPress={userOptions[key]} />
          ))}
        </View>
      ) : (
        <Button
          style={styles.connectBtn}
          btnHeight={40}
          text="Connect"
          onPress={getConnected}
        />
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
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  connectBtn: {
    width: "25%",
    marginBottom: 10,
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
