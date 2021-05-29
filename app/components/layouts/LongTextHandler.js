import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";

import Text from "./Text";

import colors from "../../config/colors";

const LongTextHandler = ({
  text,
  containerWidth = "90%",
  numOfLines = 2,
  scrollHandler,
  // a function that will be called when show more text is called -
  // will enable scroll on current page
}) => {
  const [linesNumber, setLinesNumber] = useState(numOfLines);
  const [isMoreText, setIsMoreText] = useState(false);
  const [textShown, setTextShown] = useState(false);

  if (!text) {
    text = `lorem ipusm is the best, how do i get it in my app!? i want to get
    it now.lorem ipusm is the best, how do i get it in my app!? i want to
    get it now.lorem ipusm is the best, how do i get it in my app!? i want
    to get it now.`;
  }

  const onTextLayout = useCallback((e) => {
    setIsMoreText(e.nativeEvent.lines.length >= numOfLines);
  });

  const toggleLineNumber = () => {
    setLinesNumber((prevState) =>
      prevState === numOfLines ? undefined : numOfLines
    );
    setTextShown((prevState) => !prevState);
    if (scrollHandler) scrollHandler((prevState) => !prevState);
  };

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <Text
        style={{ textAlign: "center" }}
        numberOfLines={linesNumber}
        onTextLayout={onTextLayout}
        selectable
        onPress={toggleLineNumber}
      >
        {text}
      </Text>
      {isMoreText && (
        <Text
          style={{ color: colors.primary, fontSize: 13 }}
          onPress={toggleLineNumber}
        >
          Tap to see {textShown ? "less" : "more"}
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default LongTextHandler;
