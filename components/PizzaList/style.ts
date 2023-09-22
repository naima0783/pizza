import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  TextContainer: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  button: {
    backgroundColor: "#FFC921", // ou toute autre couleur de votre choix
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#3b438b",
    fontSize: 16,
    fontWeight: "bold",
  },
  TextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#3b438b",
    height: "10%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFC921",
    fontStyle: "normal",
  },
});

export default styles;
