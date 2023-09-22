import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import Pizza from "../../models/pizza";
import { View, Pressable, Text } from "react-native";
import styles from "../PizzaCard/style";

const Footer = (props: any) => {
  const { pizzas, order } = props;

  // Constante qui contient le prix total
  const [total, setTotal] = useState(0);

  console.log("total : " + total.toFixed(2));

  // Confirme la commande (et va envoyer la commande dans la base de données)
  const ConfirmButton = () => {
    if (total === 0) {
      return;
    } else {
      //   let test = new Order(total, order);
      //console.log("commande : ", test);
      // OrderService.userOrder(test);
    }
  };

  // Calcul le prix total des pizzas commander
  useEffect(() => {
    let total = 0.0;
    order.forEach((item: any) => {
      total +=
        item.quantity *
        pizzas.find((pizza: Pizza) => pizza.id === item.id).price;
      console.log(item.quantity);
    });
    setTotal(total);
  }, [order]);

  return (
    <View>
      <Text> Total: {total.toFixed(2)}€ </Text>
      <Pressable onPress={ConfirmButton}>
        <Text>Valider</Text>
      </Pressable>
    </View>
  );
};

export default Footer;
