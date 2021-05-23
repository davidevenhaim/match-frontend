import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Text from "../layouts/Text";

import { itemPageSpec } from "../../config/theme";
import colors from "../../config/colors";

const { ITEM_WIDTH, SPACING, TEXT_SIZE } = itemPageSpec;

const FeedLabel = ({ text }) => {
  const [showFeedLabel, setShowFeedLabel] = useState(true);

  useEffect(() => {
    clearTimeout();
    setTimeout(() => setShowFeedLabel(false), 7500);
  }, []);

  return (
    <>
      {showFeedLabel && (
        <View style={styles.label}>
          <Text style={styles.labelText}>{text}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    backgroundColor: colors.primary,
    borderRadius: ITEM_WIDTH * 0.1,
    height: ITEM_WIDTH * 0.2,
    justifyContent: "center",
    left: SPACING * 0.5,
    marginRight: SPACING * 0.5,
    width: ITEM_WIDTH * 0.25,
  },
  labelText: {
    color: colors.white,
    fontSize: TEXT_SIZE * 1.4,
    textAlign: "center",
  },
});

export default FeedLabel;
