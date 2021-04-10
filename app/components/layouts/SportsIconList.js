import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import SportsIcon from "./SportsIcon";
import SportsPickerItem from "./SportsPickerItem";

const OneSportPicker = ({
  userSports,
  onPress,
  itemSelected,
  iconSize = 30,
  style,
  touch = true,
}) => {
  return (
    <View>
      <ScrollView
        horizontal
        keyboardDismissMode="on-drag"
        style={style}
        showsHorizontalScrollIndicator={false}
      >
        {!touch
          ? userSports.map((sport) => (
              <SportsIcon
                sport={sport}
                iconSize={iconSize}
                backgroundSize={iconSize * 1.5}
                style={styles.userPreview}
              />
            ))
          : userSports.map((sport) => (
              <SportsPickerItem
                item={sport}
                key={sport.toString()}
                onPress={() => onPress(sport)}
                iconSize={iconSize}
                backgroundSize={iconSize * 1.5}
                style={styles.userChoice}
                isSelected={itemSelected(sport)}
              />
            ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  userChoice: {
    marginBottom: 15,
    marginTop: 15,
  },
  userPreview: {
    // marginLeft: 2,
  },
});

export default OneSportPicker;
/* 
<FlatList
            data={userSports}
            contentContainerStyle={{
              flexGrow: 1,
              // justifyContent: "center",
            }}
            keyExtractor={(item) => item.toString()}
            horizontal
            renderItem={({ item }) => (
              <View
                style={{
                  alignItems: "center",
                  width: "20%",
                  flex: 1,
                }}
              >
                <SportsIcon
                  sport={item}
                  iconSize={iconSize}
                  backgroundSize={iconSize * 1.5}
                  // style={styles.userPreview}
                />
              </View>
            )}
          />
*/
