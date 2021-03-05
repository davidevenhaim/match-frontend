import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";

import colors from "../config/colors";
import Screen from "./Screen";
import SportsPickerItem from "./SportsPickerItem";
import Button from "./layouts/Button";

const SportsPicker = ({
  items,
  ListFooterComponentStyle,
  name,
  numColumns = 1,
  onSelectItem,
  onRemoveItem,
}) => {
  const [modalVisible, setmodalVisible] = useState(false);

  const { values } = useFormikContext();

  const modalHandler = () => {
    setmodalVisible(!modalVisible);
  };

  const itemSelected = (item) => {
    for (let i of values[name]) {
      if (item === i) return true;
    }
    return false;
  };
  return (
    <>
      <View>
        <ScrollView horizontal keyboardDismissMode="on-drag">
          <TouchableOpacity onPress={modalHandler}>
            <View style={styles.selectSport}>
              <MaterialCommunityIcons name="plus" size={50} color="white" />
            </View>
          </TouchableOpacity>
          {values[name] &&
            values[name].map((item) => {
              return (
                <SportsPickerItem
                  item={item}
                  onPress={() => onRemoveItem(item)}
                  key={item}
                  style={styles.userSports}
                  iconSize={40}
                  backgroundSize={60}
                />
              );
            })}
        </ScrollView>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <MaterialCommunityIcons
            name="arrow-down-bold-circle-outline"
            color={colors.primary}
            size={40}
            style={{ alignSelf: "center" }}
            onPress={modalHandler}
          />
          <FlatList
            data={items}
            horizontal={false}
            numColumns={numColumns}
            ListFooterComponentStyle={ListFooterComponentStyle}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => {
              const isSelected = itemSelected(item);
              return (
                <SportsPickerItem
                  style={styles.menuSports}
                  item={item} // name of sport
                  isSelected={isSelected}
                  onPress={() => {
                    if (isSelected) {
                      onRemoveItem(item);
                    } else {
                      onSelectItem(item);
                    }
                  }}
                />
              );
            }}
            ListFooterComponent={
              <Button
                text="submit"
                onPress={modalHandler}
                style={styles.menuBtn}
              />
            }
          />
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
  menuSports: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "33%",
  },
  menuBtn: {
    marginTop: 30,
    width: "50%",
  },
  selectSport: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 20,
    height: 70,
    justifyContent: "center",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 5,
    marginTop: 10,
    width: 70,
  },
  userSports: {
    marginBottom: 10,
  },
});

export default SportsPicker;
