import { ViewStyle, StyleSheet, TextStyle, StatusBar } from "react-native";

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
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#3b438b",
  },
  header: {
    marginBottom: 20,

    paddingTop: 29,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFC921", // couleur des labels
  },
  form: {
    flex: 1,
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: "bold", // gras
    fontSize: 16, // taille moyenne
    color: "#FFC921", // couleur des labels
    marginBottom: 5, // espace entre le label et l'input
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10, // bords arrondis
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "white", // couleur de fond des inputs
  },
  textArea: {
    height: 100, // plus grand pour l'adresse
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10, // bords arrondis
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "white", // couleur de fond des inputs
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
    color: "white",
    fontSize: 16,
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});
export default styles;
