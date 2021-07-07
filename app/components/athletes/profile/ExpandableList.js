import React from "react";
import { StyleSheet, View } from "react-native";
import { ExpandableListView } from "react-native-expandable-listview";

import Text from "../../layouts/Text";

import colors from "../../../config/colors";
import { itemPageSpec } from "../../../config/theme";
const { SPACING } = itemPageSpec;

const ExpandableList = ({ athlete }) => {
  const athleteExtraInfo = [
    {
      id: "Statistics",
      categoryName: "Statistics",
      subCategory: [
        {
          id: "1",
          customInnerItem: (
            <View style={styles.itemContainer}>
              <View style={{ marginLeft: SPACING * 2 }}>
                <Text>INFO-FEED</Text>
              </View>
            </View>
          ),
        },
      ],
    },
    {
      id: "Seasons",
      categoryName: "Seasons",
      subCategory: [
        {
          id: "1",
          customInnerItem: (
            <View style={styles.itemContainer}>
              <View style={{ marginLeft: SPACING * 2 }}>
                <Text>TABLE</Text>
              </View>
            </View>
          ),
        },
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <ExpandableListView
        data={athleteExtraInfo}
        itemContainerStyle={styles.itemContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: SPACING * 2,
  },
  scrollView: {
    flexShrink: 1,
    position: "relative",
  },
  itemContainer: {
    backgroundColor: colors.selected,
  },
});

export default ExpandableList;
