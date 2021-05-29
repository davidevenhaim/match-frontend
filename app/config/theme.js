import { Dimensions } from "react-native";
export const { width, height } = Dimensions.get("screen");

export const SIZE = 64;
export const ICON_SIZE = SIZE * 0.6;
export const SPACING = 12;

const s = width * 0.68;

export const itemPageSpec = {
  ITEM_WIDTH: s,
  ITEM_HEIGHT: s * 1.4,
  RADIUS: 18,
  SPACING,
  FULL_SIZE: s + SPACING,
  HEADER_HEIGHT: 175,
  ICON_SIZE: height * 0.039,
  DEVICE_HEIGHT: height,
  DEVICE_WIDTH: width,
  TEXT_SIZE: height * 0.015,
  LOGO_SIZE: ICON_SIZE * 2.3,
  MARGIN: height * 0.02,
  PADDING: height * 0.02 * 0.5,
};
