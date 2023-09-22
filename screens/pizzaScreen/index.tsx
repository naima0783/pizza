import React, { useState, useEffect, useLayoutEffect } from "react";
import { ScrollView, View } from "react-native";
import Header from "../../components/header";
import Pizza from "../../models/pizza";
import { mockDataPizza } from "../../data/MockData";
import ListPizza from "../../components/PizzaList";
import PizzaService from "../../services/PizzaService";

const PizzaScreen = ({ navigation }: any) => {
  const [pizzaList, setPizzaList] = useState<Pizza[] | undefined>();

  useEffect(() => {
    PizzaService.getAll().then((pizzas) => setPizzaList(pizzas));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} title="Passez votre commande." />

      <ListPizza navigation={navigation} pizzas={pizzaList} orderline={[]} />
    </View>
  );
};

export default PizzaScreen;
