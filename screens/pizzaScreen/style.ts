import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: "#3b438b",
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#FFC921",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "bold",
    left: 0,
  },
});
