import * as Location from "expo-location";

import { useEffect, useState } from "react";

const useLoaction = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) {
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    setLocation({ lat: latitude, lng: longitude });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLoaction;
