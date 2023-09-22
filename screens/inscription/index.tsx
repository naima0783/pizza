import React, { useRef } from "react";
import Header from "../../components/header";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { StatusBar } from "react-native";
import * as yup from "yup";
import { useFormik } from "formik";
import styles from "./style";
import AuthenticationService from "../../services/AuthenticationService";
import User from "../../models/security/user";

const Inscription = ({ navigation }: any) => {
  const validationSchema = yup.object().shape({
    nom: yup
      .string()
      .required("Le nom est requis")
      .min(2, "Le nom doit avoir au moins 2 caractères")
      .max(50, "Le nom ne doit pas dépasser 50 caractères"),

    prenom: yup
      .string()
      .required("Le prénom est requis")
      .min(2, "Le prénom doit avoir au moins 2 caractères")
      .max(50, "Le prénom ne doit pas dépasser 50 caractères"),

    mdp: yup
      .string()
      .required("Le mot de passe est requis")
      .min(6, "Le mot de passe doit avoir au moins 6 caractères"),

    cmdp: yup
      .string()
      .required("La confirmation du mot de passe est requise")
      .oneOf([yup.ref("mdp")], "Les mots de passe doivent correspondre"),

    telephone: yup
      .string()
      .matches(/^(\+33|0)[1-9](\d{2}){4}$/, "Numéro de téléphone non valide")
      .required("Le numéro de téléphone est requis"),

    adresse: yup
      .string()
      .required("L’adresse est requise")
      .min(10, "L’adresse doit avoir au moins 10 caractères")
      .max(200, "L’adresse ne doit pas dépasser 200 caractères"),
  });

  const formik = useFormik({
    initialValues: {
      nom: "",
      prenom: "",
      telephone: "",
      mdp: "",
      cmdp: "",
      adresse: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      try {
        const client: User = new User(
          values.telephone,
          "USER",
          values.nom,
          values.prenom,

          values.adresse,
          values.mdp
        );
        AuthenticationService.save(client);

        navigation.navigate("Validation", { pageinscription: true });
      } catch (error) {
        console.error("Error during sing in :", error);
      }
    },
  });

  const prenom = useRef<TextInput>(null);
  const mpd = useRef<TextInput>(null);
  const cmpd = useRef<TextInput>(null);
  const tel = useRef<TextInput>(null);

  const adresse = useRef<TextInput>(null);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="#3b438b" barStyle="light-content" />

          <View style={styles.header}>
            <Header
              title={"créé votre compte client"}
              navigation={navigation}
            />
          </View>

          <ScrollView style={styles.form}>
            <Text style={styles.label}>Nom</Text>
            <TextInput
              style={styles.input}
              onChangeText={formik.handleChange("nom")}
              onBlur={formik.handleBlur("nom")}
              value={formik.values.nom}
              keyboardType="ascii-capable"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={() => prenom.current?.focus()}
            />
            {formik.touched.nom && formik.errors.nom ? (
              <Text style={styles.errorText}>{formik.errors.nom}</Text>
            ) : null}

            <Text style={styles.label}>Prénom</Text>
            <TextInput
              ref={prenom}
              style={styles.input}
              onChangeText={formik.handleChange("prenom")}
              onBlur={formik.handleBlur("prenom")}
              value={formik.values.prenom}
              keyboardType="ascii-capable"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={() => mpd.current?.focus()}
            />
            {formik.touched.prenom && formik.errors.prenom ? (
              <Text style={styles.errorText}>{formik.errors.prenom}</Text>
            ) : null}

            <Text style={styles.label}>Mot de passe</Text>
            <TextInput
              ref={mpd}
              style={styles.input}
              onChangeText={formik.handleChange("mdp")}
              onBlur={formik.handleBlur("mdp")}
              value={formik.values.mdp}
              keyboardType="visible-password"
              autoCorrect={false}
              returnKeyType="next"
              secureTextEntry
            />
            {formik.touched.prenom && formik.errors.mdp ? (
              <Text style={styles.errorText}>{formik.errors.mdp}</Text>
            ) : null}

            <Text style={styles.label}>Confirmation mot de passe</Text>
            <TextInput
              ref={cmpd}
              style={styles.input}
              onChangeText={formik.handleChange("cmdp")}
              onBlur={formik.handleBlur("cmdp")}
              value={formik.values.cmdp}
              keyboardType="visible-password"
              autoCorrect={false}
              secureTextEntry
              returnKeyType="next"
              onSubmitEditing={() => tel.current?.focus()}
            />
            {formik.touched.cmdp && formik.errors.cmdp ? (
              <Text style={styles.errorText}>{formik.errors.cmdp}</Text>
            ) : null}

            <Text style={styles.label}>Téléphone</Text>
            <TextInput
              ref={tel}
              style={styles.input}
              onChangeText={formik.handleChange("telephone")}
              onBlur={formik.handleBlur("telephone")}
              value={formik.values.telephone}
              keyboardType="phone-pad"
              autoCorrect={false}
              returnKeyType="next"
              onSubmitEditing={() => adresse.current?.focus()}
            />
            {formik.touched.telephone && formik.errors.telephone ? (
              <Text style={styles.errorText}>{formik.errors.telephone}</Text>
            ) : null}

            <Text style={styles.label}>Adresse</Text>
            <TextInput
              ref={adresse}
              style={styles.input}
              onChangeText={formik.handleChange("adresse")}
              onBlur={formik.handleBlur("adresse")}
              value={formik.values.adresse}
              keyboardType="ascii-capable"
              autoCorrect={false}
              returnKeyType="done"
              numberOfLines={7}
            />
            {formik.touched.adresse && formik.errors.adresse ? (
              <Text style={styles.errorText}>{formik.errors.adresse}</Text>
            ) : null}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => formik.handleSubmit()}
              >
                <Text style={styles.buttonText}>Créer</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Inscription;
