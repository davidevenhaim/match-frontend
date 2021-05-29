import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useFormikContext } from "formik";
import { Input } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TextInput from "./TextInput";

import colors from "../../config/colors";
import { ICON_SIZE, itemPageSpec } from "../../config/theme";
import AppMapView from "../feed/event/mapView/MapView";
const { MARGIN, RADIUS } = itemPageSpec;
const API_KEY = "AIzaSyCq8a_KTqULenrmLjhJRYiAVbSVJJVWaxY";

const URL_REQUEST =
  "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?$parameters";

const INPUT_TYPE = "textquery"; // "phonenumber" alse avilable

const LANG = "iw"; // hebrew!

const FIELDS = ""; // need to specify - public sport places or something like this

const GooglePlacesInput = ({
  style,
  autoFocus = false,
  iconName,
  iconColor,
  inputName,
  isProtected,
  setIsHidden,
  errorMessageStyle,
  width = "80%",
  showErrorMessage = false,
}) => {
  const { errors, setFieldValue } = useFormikContext();
  const [details, setDetails] = useState({});
  const [data, setData] = useState({});
  // console.log(details.geometry.location);

  const userCurPlace = {
    description: "Current Place",
    geometry: { location: { lat: 31.96134759999999, lng: 34.7731056 } },
  };

  const loc = {
    lat: 31.96134759999999,
    lng: 34.7731056,
    longName: "ראשון לציון",
    shortName: 'ראשל"צ',
  };

  const change = () => {
    setFieldValue(inputName, loc);
  };
  useEffect(() => change(), []);
  return (
    <View style={style}>
      <GooglePlacesAutocomplete
        placeholder="Where is your event?"
        onPress={(data, details) => {
          setData(data);
          setDetails(details);
          // console.log(details);
          setFieldValue(inputName, {
            lat: details.geometry.location.lat,
            lng: details.geometry.location.lng,
            longName: details.address_components[2].long_name,
            shortName: details.address_components[2].short_name,
          });
        }}
        query={{
          // key: API_KEY,
          language: LANG,
          components: "country:il",
        }}
        currentLocation
        // currentLocationLabel="מיקום נוכחי"
        textInputProps={{
          errorStyle: { color: colors.red },
        }}
        styles={{
          powered: { opacity: 0 },
          textInput: styles.textInput,
          textInputContainer: { width },
          listView: [styles.placesList, { width }],
        }}
        fetchDetails
        renderDescription={(row) => row.description}
        GooglePlacesDetailsQuery
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.snow,
    borderRadius: RADIUS * 2,
    flexDirection: "row",
    marginBottom: MARGIN * 0.5,
    marginLeft: MARGIN,
    marginTop: MARGIN * 0.5,
    padding: MARGIN,
    borderColor: colors.mediumGrey,
    borderWidth: 0.1,
    fontFamily: "Righteous-font",
  },
  placesList: {
    backgroundColor: colors.snow,
    borderColor: colors.mediumGrey,
    borderWidth: 0.1,
    marginLeft: MARGIN,
    borderRadius: RADIUS * 0.4,
  },
});

export default GooglePlacesInput;

const EXAMPLE_1 = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?
  input=Museum%20of%20Contemporary%20Art%20Australia&
  inputtype=textquery&
  fields=photos,formatted_address,name,rating,opening_hours,geometry
  &key=YOUR_API_KEY`;

const EXAMPLE_2 = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?
input=mongolian%20grill&
inputtype=textquery&
fields=photos,formatted_address,name,opening_hours,rating&
locationbias=circle:2000@47.6918452,-122.2226413&
key=YOUR_API_KEY`;
