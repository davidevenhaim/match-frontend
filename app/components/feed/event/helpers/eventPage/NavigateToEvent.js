import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Popup } from "react-native-map-link";

import RoundIconButton from "../../../../layouts/RoundIconButton";
import Text from "../../../../layouts/Text";

import colors from "../../../../../config/colors";
import { itemPageSpec } from "../../../../../config/theme";
const { ICON_SIZE, TEXT_SIZE } = itemPageSpec;

const NavigateToEvent = ({
  currentPosition,
  destination,
  eventName,
  style,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  console.log(currentPosition);
  console.log(destination);
  return (
    <View style={[styles.container, style]}>
      <View style={{ flexDirection: "row" }}>
        <RoundIconButton
          name="google-maps"
          onPress={() => setIsVisible(!isVisible)}
          style={styles.navigateButton}
          backgroundSize={ICON_SIZE}
        />
      </View>
      <Text style={styles.text}>{`Navigate To\nEvent`}</Text>
      <Popup
        isVisible={isVisible}
        onCancelPressed={() => setIsVisible(false)}
        onAppPressed={() => setIsVisible(false)}
        onBackButtonPressed={() => setIsVisible(false)}
        modalProps={{
          // you can put all react-native-modal props inside.
          animationIn: "slideInUp",
        }}
        // appsWhiteList={["apple-maps", "google-maps", "moovit"]}
        options={{
          latitude: destination.lat ? destination.lat : 38.8976763,
          longitude: destination.lng ? destination.lng : -77.0387185,
          sourceLatitude: currentPosition.lat, // optionally specify starting location for directions
          sourceLongitude: currentPosition.lng, // not optional if sourceLatitude is specified
          title: eventName,
          googleForceLatLon: false, // optionally force GoogleMaps to use the latlon for the query instead of the title
          alwaysIncludeGoogle: false, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
          dialogTitle: `Navigate to ${eventName} ?`,
          dialogMessage: "Choose the must convienient way for you", // optional (default: 'What app would you like to use?')
          cancelText: "Hide dialog", // optional (default: 'Cancel')
          appsWhiteList: ["google-maps"], // optionally you can set which apps to show (default: will show all supported apps installed on device)
          naverCallerName: "com.example.myapp", // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
          // appTitles: { 'google-maps': 'My custom Google Maps title' } // optionally you can override default app titles
          // app: 'uber'  // optionally specify specific app to use
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  navigateButton: {
    backgroundColor: colors.sportColors.basketball,
  },
  text: {
    fontSize: TEXT_SIZE,
    top: -TEXT_SIZE * 0.5,
    textAlign: "center",
    color: colors.sportColors.basketball,
  },
});

export default NavigateToEvent;
