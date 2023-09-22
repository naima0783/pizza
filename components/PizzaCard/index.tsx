import { View, Text, Image, Button, StyleSheet } from "react-native";
import styles from "./style";
import pizaaImage from "../../data/pizzaImage";
import React, { useState } from "react";
import Pizza from "../../models/pizza";

type Props = {
  pizza: Pizza;
  onQuantityChange?: (pizzaId: number, quantity: number) => void;
};

const PizzaCard = ({ pizza, onQuantityChange }: Props) => {
  const [quantite, setQuantite] = useState(0);
  const [count, setCount] = useState(0);

  const addPizza = () => {
    if (count < 10) {
      setCount(count + 1);
      onQuantityChange && onQuantityChange(pizza.id, count + 1);
    }
  };

  const removePizza = () => {
    if (count > 0) {
      setCount(count - 1);
      onQuantityChange && onQuantityChange(pizza.id, count - 1);
    }
  };
  const lien = pizaaImage[pizza.image];

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={lien} style={styles.image} />

        <View style={styles.TextContainer}>
          <Text>{pizza.name}</Text>
          <Text style={{ padding: 7 }}>{pizza.description}</Text>
        </View>
      </View>

      <View style={styles.quantite}>
        <Text style={{ paddingHorizontal: 20, fontSize: 20 }}>quantité </Text>

        <View style={styles.containerBoutton}>
          <Button title="-" onPress={removePizza} />
          <Text style={styles.countTextBoutton}> {count} </Text>
          <Button title="+" onPress={addPizza} />
        </View>
        <Text
          style={{
            color: "#008000",
            fontWeight: "bold",
            paddingHorizontal: 20,
          }}
        >
          {pizza.price} €
        </Text>
      </View>
    </View>
  );
};
export default PizzaCard;
