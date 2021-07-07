import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { itemPageSpec } from "../../../../config/theme";

const AppMapView = ({
  latitude = 37.78825,
  longitude = -122.4324,
  latitudeDelta = 0.001,
  longitudeDelta = 0.001,
  markerTitle = "Event's location",
  style,
}) => {
  return (
    <View style={style}>
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta,
          longitudeDelta,
        }}
        style={styles.mapStyle}
      >
        <Marker coordinate={{ latitude, longitude }} title={markerTitle} />
      </MapView>
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
