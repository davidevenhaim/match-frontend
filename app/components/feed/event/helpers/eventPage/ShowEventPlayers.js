import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet, ScrollView } from "react-native";

import ShowPlayers from "../../../../athletes/ShowPlayers";
import Text from "../../../../layouts/Text";

import colors from "../../../../../config/colors";
import { itemPageSpec } from "../../../../../config/theme";
const { MARGIN, TEXT_SIZE, ICON_SIZE } = itemPageSpec;

const PLAYERS_TO_SHOW = 3;
const SIZE = ICON_SIZE * 1.3;

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
                    fontSize: TEXT_SIZE * 0.8,
                  }}
                >
                  {"show\nless"}
                </Text>
              ) : (
                <Text
                  style={{ color: colors.white, fontSize: TEXT_SIZE * 1.2 }}
                >
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
    margin: MARGIN * 1.5,
  },
  playersAmountIndicator: {
    backgroundColor: colors.primary,
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -MARGIN * 0.2,
  },
  playerLabel: {
    fontSize: TEXT_SIZE * 1.6,
    letterSpacing: 1.2,
    justifyContent: "center",
    top: MARGIN * 0.5,
    marginLeft: MARGIN,
  },
});

export default ShowEventPlayers;
