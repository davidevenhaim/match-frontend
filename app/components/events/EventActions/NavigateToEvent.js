import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { showLocation, Popup } from "react-native-map-link";

import RoundIconButton from "../../layouts/RoundIconButton";
import Text from "../../layouts/Text";

import colors from "../../../config/colors";

const NavigateToEvent = ({ currentPosition, destination }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <RoundIconButton
        name="google-maps"
        onPress={() => setIsVisible(!isVisible)}
        style={styles.navigateButton}
      />
      <Text>Navigate</Text>
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
          latitude: 38.8976763,
          longitude: -77.0387185,
          sourceLatitude: -8.0870631, // optionally specify starting location for directions
          sourceLongitude: -34.8941619, // not optional if sourceLatitude is specified
          title: "The White House", // optional
          googleForceLatLon: false, // optionally force GoogleMaps to use the latlon for the query instead of the title
          googlePlaceId: "ChIJGVtI4by3t4kRr51d_Qm_x58", // optionally specify the google-place-id
          alwaysIncludeGoogle: false, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
          dialogTitle: "Navigate to {}?", // optional (default: 'Open in Maps')
          dialogMessage: "Choose the must convienient way for you", // optional (default: 'What app would you like to use?')
          cancelText: "Hide dialog", // optional (default: 'Cancel')
          appsWhiteList: ["google-maps"], // optionally you can set which apps to show (default: will show all supported apps installed on device)
          naverCallerName: "com.example.myapp", // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
          // appTitles: { 'google-maps': 'My custom Google Maps title' } // optionally you can override default app titles
          // app: 'uber'  // optionally specify specific app to use
        }}
        style={
          {
            /* Optional: you can override default style by passing your values. */
          }
        }
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
});

export default NavigateToEvent;
