import { Dimensions } from "react-native";
export const { width, height } = Dimensions.get("screen");

export const SIZE = 64;
export const ICON_SIZE = SIZE * 0.6;
const SPACING = 12;

const s = width * 0.68;

export const itemPageSpec = {
  ITEM_WIDTH: s,
  ITEM_HEIGHT: s * 1.4,
  RADIUS: 18,
  SPACING,
  FULL_SIZE: s + SPACING,
};
