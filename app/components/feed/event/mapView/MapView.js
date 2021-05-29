import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

import { itemPageSpec } from "../../../../config/theme";

const AppMapView = ({
  latitude,
  longitude,
  latitudeDelta = 0.002,
  longitudeDelta = 0.002,
}) => {
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: latitude || 37.78825,
          longitude: longitude || -122.4324,
          latitudeDelta,
          longitudeDelta,
        }}
        style={styles.mapStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mapStyle: {
    height: itemPageSpec.ITEM_HEIGHT * 0.5,
    width: itemPageSpec.DEVICE_WIDTH,
  },
});

export default AppMapView;
