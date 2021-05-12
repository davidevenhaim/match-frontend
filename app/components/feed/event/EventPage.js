import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/core";
import { useQuery } from "@apollo/client";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { TouchableOpacity } from "react-native-gesture-handler";

import { GET_EVENT_PLAYERS } from "../../../api/gql/query";

import Button from "../../layouts/Button";
import EventLevelIndicator from "../../layouts/EventLevelIndicator";
import IconWithText from "../../layouts/IconWithText";
import JoinEvent from "../../events/EventActions/JoinEvent";
import LongTextHandler from "../../layouts/LongTextHandler";
import ShowEventPlayers from "../../athletes/ShowEventPlayers";
import Text from "../../layouts/Text";

import colors from "../../../config/colors";

import { itemPageSpec, ICON_SIZE, SIZE } from "../../../config/eventPageTheme";
import ShowCaptainInfo from "./helpers/eventPage/ShowCaptainInfo";
import { useDispatch, useSelector } from "react-redux";
const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = itemPageSpec;
const OPACITY = 0.4;

const EventPage = ({ isParticipant = false }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const event = route.params.event;
  const eventDate = new Date(event.eventDate);

  const [showPlayersLimit, setShowPlayersLimit] = useState(3);
  const [isLimitToggled, setIsLimitToggled] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      if (!isParticipant) {
        navigation.dangerouslyGetParent().setOptions({
          tabBarVisible: false,
        });
      }
      return () => {
        if (!isParticipant) {
          navigation.dangerouslyGetParent().setOptions({
            tabBarVisible: true,
          });
        }
      };
    })
  );

  const { data, error, loading } = useQuery(GET_EVENT_PLAYERS, {
    variables: { id: event.id },
    fetchPolicy: "network-only",
  });

  const toggleShowPlayers = () => {
    setShowPlayersLimit((prevState) =>
      prevState === data.Event.players.length ? 3 : data.Event.players.length
    );
    setIsLimitToggled((prevState) => !prevState);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <View
        style={[
          { backgroundColor: colors.sportColors[event.sport] },
          styles.sportLabel,
        ]}
      >
        <MaterialCommunityIcons
          name="arrow-left"
          size={ICON_SIZE}
          onPress={navigation.goBack}
          style={styles.goBackButton}
          color={colors.white}
        />
        <Text style={styles.sportText}>{event.sport}</Text>
      </View>
      <View style={styles.joinEventContainer}>
        {isParticipant ? null : (
          <JoinEvent
            event={event}
            isParticipant={false}
            size={ICON_SIZE * 1.3}
            iconStyle={{ backgroundColor: colors.sportColors[event.sport] }}
            textStyle={{ color: colors.sportColors[event.sport] }}
          />
        )}
      </View>
      <View style={styles.evenInfoContainer}>
        <View style={styles.dateContainer}>
          <IconWithText
            iconName="calendar"
            iconSize={30}
            iconColor={colors.sportColors[event.sport]}
            text={format(eventDate, "    dd MMM .yyy ")}
            textColor={colors.primary}
            style={{ flexDirection: "row" }}
          />
          <IconWithText
            iconName="clock"
            iconSize={30}
            iconColor={colors.sportColors[event.sport]}
            text={format(eventDate, "    kk:mm ")}
            textColor={colors.primary}
            style={{ flexDirection: "row" }}
          />
        </View>
        <View style={styles.eventExtraDetails}>
          <Text style={{ fontSize: 25 }}>{event.eventName}</Text>
          <IconWithText
            iconName="map-marker"
            iconSize={30}
            iconColor={colors.sportColors[event.sport]}
            text={event.location}
            textColor={colors.mediumGrey}
            style={{ flexDirection: "row", marginTop: 10 }}
          />
          <LongTextHandler text={event.description} />
          <EventLevelIndicator
            itemHeight={ITEM_HEIGHT}
            itemWidth={ITEM_WIDTH}
            level={event.level}
            textStyle={{ textTransform: "capitalize" }}
          />
        </View>
      </View>
      {!loading && !error && (
        <View style={styles.playersContainer}>
          <ShowEventPlayers
            players={data.Event.players}
            size="medium"
            limit={showPlayersLimit}
          />
          {(data.Event.players.length - showPlayersLimit > 0 ||
            isLimitToggled) && (
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
                  +{Math.max(0, data.Event.players.length - showPlayersLimit)}
                </Text>
              )}
            </TouchableOpacity>
          )}
          {isLimitToggled ? null : (
            <Text style={styles.playerLabel}>
              Participant{data.Event.players.length > 1 ? "s" : null}
            </Text>
          )}
        </View>
      )}
      <ShowCaptainInfo captain={event.captain} sport={event.sport} />
      {!isParticipant && (
        <Button
          text="Join Event"
          style={{
            width: "90%",
            marginTop: 30,
            borderRadius: 10,
            backgroundColor: colors.sportColors[event.sport],
          }}
        />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  evenInfoContainer: {
    marginTop: SPACING * 12,
    // backgroundColor: "black",
  },
  eventExtraDetails: {
    left: SPACING * 2,
    marginTop: SPACING * 2,
  },
  goBackButton: {
    top: ITEM_HEIGHT * 0.16,
    left: 10,
    zIndex: 2,
    height: ITEM_HEIGHT * 0.1,
    width: ITEM_HEIGHT * 0.1,
  },
  playersAmountIndicator: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -4,
  },
  playersContainer: {
    justifyContent: "flex-start",
    flexDirection: "row",
    margin: 30,
  },
  playerLabel: {
    fontSize: 22,
    letterSpacing: 1.2,
    justifyContent: "center",
    top: 10,
    marginLeft: 20,
  },
  joinEventContainer: {
    alignSelf: "flex-end",
    position: "absolute",
    top: ITEM_HEIGHT * 0.13,
    right: RADIUS,
  },
  sportLabel: {
    borderRadius: RADIUS,
    flexDirection: "row",
    height: ITEM_HEIGHT * 0.4,
    opacity: OPACITY,
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
  },
  sportText: {
    alignSelf: "center",
    color: colors.white,
    fontSize: 40,
    textAlign: "center",
    textTransform: "capitalize",
    position: "absolute",
    left: 60,
    top: ITEM_HEIGHT * 0.15,
  },
});

export default EventPage;
