import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as yup from "yup";
import { useFormik } from "formik";
import styles from "./style";
import Header from "../../components/header";
import AuthenticationService from "../../services/AuthenticationService";

interface Props {
  setIsAuthenticated: Function;
}

const Login = ({
  navigation,
  setIsAuthenticated,
}: Props & { navigation: any }) => {
  const [error, setError] = useState<boolean>(false);

  setIsAuthenticated(false);

  //const navigation = useNavigation();

  const goToInscription = () => {
    navigation.navigate("Inscription");
  };

  const validationSchema = yup.object().shape({
    login: yup
      .string()
      .required("obligatoire")
      .test(
        "20 len max",
        "au max 20 caractères",
        (val: string | undefined) => !!val && val.length <= 20
      ),
    password: yup
      .string()
      .required("obligatoire")
      .test(
        "6len",
        "au min 6 caractères",
        (val: string | undefined) => !!val && val.length >= 6
      ),
  });

  const formik = useFormik({
    initialValues: { login: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      AuthenticationService.login(values.login, values.password).then((ok) => {
        setIsAuthenticated(ok);
        setError(!ok);
      });
    },
  });

  const [keyboardStatus, setKeyboardStatus] = useState("");

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });
  });

  const secondInputRef = useRef<TextInput>(null);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Header navigation={navigation} title={""} />
      <View style={styles.container}>
        <Text style={styles.textInput}>Identifiant</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={formik.values.login}
            onChangeText={formik.handleChange("login")}
            onBlur={formik.handleBlur("login")}
            editable={true}
            keyboardType="phone-pad"
            returnKeyType="next"
            onSubmitEditing={() => secondInputRef.current?.focus()}
          />
        </View>

        <Text style={styles.textInput}>Mot de passe</Text>

        <View style={styles.inputContainer}>
          <TextInput
            ref={secondInputRef}
            editable={true}
            style={styles.input}
            value={formik.values.password}
            onChangeText={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            secureTextEntry
            keyboardType="visible-password"
            autoCorrect={false}
            returnKeyType="done"
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity onPress={() => goToInscription()}>
            <Text
              style={{
                color: "#FFC921",
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              créé un compte
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => formik.handleSubmit()}
          >
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
        </View>
        {error && <Text style={styles.errorText}>Connexion impossible</Text>}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
