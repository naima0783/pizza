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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#3b438b",
    paddingTop: 20,
    paddingBottom: 20,
  },
  footer: {
    backgroundColor: "#3b438b",
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    textDecorationLine: "underline",
    color: "#FFC921",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3b438b",
    margin: 0,
    padding: 0,
  },
  contentText: {
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    color: "#FFC921",
  },
});
export default styles;
