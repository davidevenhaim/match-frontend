import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/core";
import { useQuery } from "@apollo/client";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { format } from "date-fns";

import { GET_EVENT_PLAYERS } from "../../../api/gql/query";

import EventLevelIndicator from "../../layouts/EventLevelIndicator";
import IconWithText from "../../layouts/IconWithText";
import JoinEvent from "../../events/EventActions/JoinEvent";
import LongTextHandler from "../../layouts/LongTextHandler";
import ShowEventPlayers from "./helpers/eventPage/ShowEventPlayers";
import ShowCaptainInfo from "./helpers/eventPage/ShowCaptainInfo";
import Text from "../../layouts/Text";

import colors from "../../../config/colors";
import { defaultEvent } from "../../../config/defaultValues";
import { ICON_SIZE, itemPageSpec } from "../../../config/theme";

const { ITEM_WIDTH, ITEM_HEIGHT, RADIUS, SPACING, FULL_SIZE } = itemPageSpec;
const OPACITY = 0.4;

const EventPage = ({ isParticipant = false }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const event = route.params.event;
  const eventDate = new Date(event.eventDate);
  if (!event) event = defaultEvent;

  useFocusEffect(
    React.useCallback(() => {
      // if (!isParticipant) {
      navigation.dangerouslyGetParent().setOptions({
        tabBarVisible: false,
      });
      // }
      return () => {
        // if (!isParticipant) {
        navigation.dangerouslyGetParent().setOptions({
          tabBarVisible: true,
        });
        // }
      };
    })
  );

  const { data, error, loading } = useQuery(GET_EVENT_PLAYERS, {
    variables: { id: event.id },
    fetchPolicy: "network-only",
  });

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
        <JoinEvent
          event={event}
          isParticipant={isParticipant}
          size={ICON_SIZE * 1.3}
          iconStyle={{ backgroundColor: colors.sportColors[event.sport] }}
          textStyle={{ color: colors.sportColors[event.sport] }}
        />
      </View>
      <View style={styles.evenInfoContainer}>
        <View style={styles.dateContainer}>
          <IconWithText
            iconName="calendar"
            iconSize={ICON_SIZE * 0.7}
            iconColor={colors.sportColors[event.sport]}
            text={format(eventDate, "    dd MMM .yyy ")}
            textColor={colors.primary}
            style={{ flexDirection: "row" }}
          />
          <IconWithText
            iconName="clock"
            iconSize={ICON_SIZE * 0.7}
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
            iconSize={ICON_SIZE * 0.7}
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

      <ShowEventPlayers
        players={loading ? null : data.Event.players}
        loading={loading}
        error={error}
        itemSize={ITEM_HEIGHT}
      />
      <ShowCaptainInfo captain={event.captain} sport={event.sport} />
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
    marginTop: FULL_SIZE * 0.45,
  },
  eventExtraDetails: {
    left: FULL_SIZE * 0.1,
    marginTop: FULL_SIZE * 0.1,
  },
  goBackButton: {
    top: FULL_SIZE * 0.23,
    left: 10,
    height: FULL_SIZE * 0.13,
    width: FULL_SIZE * 0.13,
  },
  joinEventContainer: {
    alignSelf: "flex-end",
    position: "absolute",
    top: FULL_SIZE * 0.15,
    right: FULL_SIZE * 0.1,
  },
  sportLabel: {
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
    flexDirection: "row",
    height: FULL_SIZE * 0.5,
    opacity: OPACITY,
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
  },
  sportText: {
    alignSelf: "center",
    color: colors.white,
    fontSize: FULL_SIZE * 0.15,
    textAlign: "center",
    textTransform: "capitalize",
    position: "absolute",
    left: FULL_SIZE * 0.2,
    top: FULL_SIZE * 0.21,
  },
});

export default EventPage;
