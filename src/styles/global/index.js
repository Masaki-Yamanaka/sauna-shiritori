import { StyleSheet, Dimensions } from "react-native";
import colors from "../colors";
const { width, height } = Dimensions.get("screen");

export const globalStyles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    paddingTop: height * 0.1,
    paddingHorizontal: 36,
    flex: 1
  },
  titleText: {
    fontSize: 27,
    color: colors.white,
    fontWeight: "600"
  }
});
