import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import Pizza from "../../models/pizza";
import PizzaCard from "../PizzaCard";
import styles from "./style";
import React, { useEffect, useLayoutEffect, useState } from "react";
import OrderLine from "../../models/Orderline";

interface Props {
  pizzas: Pizza[];
  navigation: any;
}

const ListPizza = ({ pizzas, navigation }: Props & { navigation: any }) => {
  const [total, setTotal] = useState(0);
  const [orderline, setOrderline] = useState<OrderLine[]>([]);

  const valid = () => {
    navigation.navigate("Validation", { pageinscription: false });
  };

  const handleQuantityChange = (pizzaId: number, quantity: number) => {
    const existingOrderline = orderline.find((item) => item.id === pizzaId);

    let updatedOrderline;

    if (existingOrderline) {
      updatedOrderline = orderline.map((item) =>
        item.id === pizzaId ? { ...item, quantity } : item
      );
    } else {
      const newOrderLine = new OrderLine(pizzaId, quantity);
      updatedOrderline = [...orderline, newOrderLine];
    }

    setOrderline(updatedOrderline);
  };

  useEffect(() => {
    let newTotal = 0.0;
    orderline.forEach((item: any) => {
      const price =
        pizzas.find((pizza: Pizza) => pizza.id === item.id)?.price || 0;
      newTotal += item.quantity * price;
    });
    setTotal(newTotal);
  }, [orderline, pizzas]);

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          {pizzas?.map((pizza: Pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.TextContainer}>
        <Text style={styles.text}>Total : {total} €</Text>

        <TouchableOpacity onPress={() => valid()} style={styles.button}>
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ListPizza;
