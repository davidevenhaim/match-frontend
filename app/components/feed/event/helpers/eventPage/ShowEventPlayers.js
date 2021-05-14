import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet, ScrollView } from "react-native";

import ShowPlayers from "../../../../athletes/ShowPlayers";
import Text from "../../../../layouts/Text";

import colors from "../../../../../config/colors";
const PLAYERS_TO_SHOW = 3;
const SIZE = 50;

const ShowEventPlayers = ({ loading = true, error = false, players }) => {
  const [showPlayersLimit, setShowPlayersLimit] = useState(PLAYERS_TO_SHOW);
  const [isLimitToggled, setIsLimitToggled] = useState(false);

  const toggleShowPlayers = () => {
    setShowPlayersLimit((prevState) =>
      prevState === players.length ? PLAYERS_TO_SHOW : players.length
    );
    setIsLimitToggled((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      {!loading && !error && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.playersContainer}
          disableIntervalMomentum={true}
        >
          <ShowPlayers players={players} size={SIZE} limit={showPlayersLimit} />
          {(players.length - showPlayersLimit > 0 || isLimitToggled) && (
            <TouchableOpacity
              style={styles.playersAmountIndicator}
              onPress={toggleShowPlayers}
            >
              {isLimitToggled ? (
                <Text
                  style={{
                    color: colors.white,
                    textAlign: "center",
                    fontSize: 12,
                  }}
                >
                  {"show\nless"}
                </Text>
              ) : (
                <Text style={{ color: colors.white, fontSize: 18 }}>
                  +{Math.max(0, players.length - showPlayersLimit)}
                </Text>
              )}
            </TouchableOpacity>
          )}
          {isLimitToggled ? null : (
            <Text style={styles.playerLabel}>
              Participant{players.length > 1 ? "s" : null}
            </Text>
          )}
          <View style={{ width: SIZE }} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZE * 2,
    marginBottom: SIZE / 2,
  },
  playersContainer: {
    justifyContent: "flex-start",
    flexGrow: 1,
    margin: 30,
  },
  playersAmountIndicator: {
    backgroundColor: colors.primary,
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -4,
  },
  playerLabel: {
    fontSize: 22,
    letterSpacing: 1.2,
    justifyContent: "center",
    top: 10,
    marginLeft: 20,
  },
});

export default ShowEventPlayers;
