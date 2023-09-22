import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Styles {
  textInput: TextStyle;
  container: ViewStyle;
  inputContainer: ViewStyle;
  iconContainer: ViewStyle;
  input: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  errorText: TextStyle;
  buttonContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: "#3b438b",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textInput: {
    color: "#FFC921",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "bold",
  },

  inputContainer: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    color: "black",
    paddingLeft: 10,
    backgroundColor: "white",
  },

  iconContainer: {
    marginRight: 10,
  },

  input: {
    flex: 1,
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginTop: 20,
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

  errorText: {
    color: "red",
    marginTop: 10,
  },
});

export default styles;
