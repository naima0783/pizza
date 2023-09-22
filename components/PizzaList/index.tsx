import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import Pizza from "../../models/pizza";
import PizzaCard from "../PizzaCard";
import styles from "./style";
import React, { useEffect, useLayoutEffect, useState } from "react";
import OrderLine from "../../models/Orderline";

interface Props {
  pizzas: Pizza[] | undefined;
  navigation: any;
  orderline: OrderLine[];
}

const ListPizza = ({
  pizzas,
  navigation,
  orderline,
}: Props & { navigation: any }) => {
  const [total, setTotal] = useState(0);

  const valid = () => {
    if (total === 0) {
      return;
    } else {
      //let test = new Order(total, orderline);
      //console.log("commande : ", test);

      //OrderService.userOrder(test);

      navigation.navigate("Validation", { pageinscription: false });
    }
  };

  // useEffect(() => {
  //   let total = 0.0;
  //   orderline.forEach((item: any) => {
  //     const price =
  //       pizzas.find((pizza: Pizza) => pizza.id === item.id)?.price || 0;

  //     total += item.quantity * price;
  //     console.log(item.quantity);
  //   });
  //   setTotal(total);
  // }, [orderline]);

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          {pizzas?.map((pizza: Pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.TextContainer}>
        <Text style={styles.text}>Total : {0} €</Text>

        <TouchableOpacity onPress={() => valid()} style={styles.button}>
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ListPizza;
