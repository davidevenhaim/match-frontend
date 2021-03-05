import { useFonts } from "@expo-google-fonts/inter";

const AppFont = () => {
  let [fontsLoaded] = useFonts({
    "Righteous-font": require("../../assets/fonts/Righteous-Regular.ttf"),
  });
  return fontsLoaded;
};

export default AppFont;
