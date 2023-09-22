import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Header from "../../components/header";
import styles from "./style";
import { Route } from "@react-navigation/native";

const Validation = ({ navigation, route }: any) => {
  const { pageinscription } = route.params;

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Header navigation={navigation} title={""} />
      </View>
      <View style={styles.content}>
        {pageinscription ? (
          <Text style={styles.contentText}>Vous êtes prês à commander.</Text>
        ) : (
          <>
            <Text style={styles.contentText}>
              Votre commande est en cours de préparation.
            </Text>
            <Text style={styles.contentText}>
              Elle sera livrée dans 30 minutes
            </Text>
          </>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("PizzaScreen")}>
          {pageinscription ? (
            <Text style={styles.footerText}>
              Vous pouvez passer votre première commande.
            </Text>
          ) : (
            <Text style={styles.footerText}>Retour à la page commande</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Validation;
