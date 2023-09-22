import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Login from "../../screens/login";

interface Props {
  title: string;
  navigation: any;
}
const Header = ({ navigation, title }: Props) => {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        width: "100%",
        height: "19%",
        backgroundColor: "#3b438b",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          height: 100,
          width: "35%",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={goToLogin}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "#3b438b",
          width: "65%",
          height: 100,
        }}
      >
        <Text
          style={{
            color: "#FFC921",
            fontSize: 30,
            fontStyle: "normal",
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
