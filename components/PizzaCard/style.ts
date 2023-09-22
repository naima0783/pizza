import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  TextContainer: ViewStyle;
  quantite: ViewStyle;
  image: any;
  containerBoutton: ViewStyle;
  countTextBoutton: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
    borderBottomColor: "black",
    borderBottomWidth: 3,
    borderRadius: 25,
  },

  contentContainer: {
    width: "100%",
    padding: 5,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#000000",
  },
  TextContainer: { display: "flex", flexDirection: "column", width: "65%" },

  quantite: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: "35%",
  },
  containerBoutton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  countTextBoutton: {
    color: "#000000",
    fontSize: 20,
    margin: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#000000",
    borderStyle: "solid",
  },
});

export default styles;
