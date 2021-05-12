import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";

import Text from "./Text";

const LongTextHandler = ({ text, containerWidth = "90%", numOfLines = 2 }) => {
  const [linesNumber, setLinesNumber] = useState(numOfLines);
  const [isMoreText, setIsMoreText] = useState(false);
  const [textShown, setTextShown] = useState(false);
  const onTextLayout = useCallback((e) => {
    setIsMoreText(e.nativeEvent.lines.length >= 2);
  });

  const toggleLineNumber = () => {
    setLinesNumber((prevState) => (prevState === 2 ? undefined : 2));
    setTextShown((prevState) => !prevState);
  };

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <Text
        style={{ textAlign: "center", textTransform: "lowercase" }}
        numberOfLines={linesNumber}
        onTextLayout={onTextLayout}
        selectable
        onPress={toggleLineNumber}
      >
        {text}lorem ipusm is the best, how do i get it in my app!? i want to get
        it now.lorem ipusm is the best, how do i get it in my app!? i want to
        get it now.lorem ipusm is the best, how do i get it in my app!? i want
        to get it now.
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
