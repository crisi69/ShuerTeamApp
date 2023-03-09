import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgprincipal}
        source={require("../src/imgs/wakandaforever.jpg")}
      ></Image>
      <Text>Películas</Text>
      <Image
        style={styles.imgprincipal}
        source={require("../src/imgs/thelastofus.jpg")}
      ></Image>
      <Text>Series</Text>

      <Text style={styles.email}>Usuario: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  email: {
    padding: 0,
    marginBottom: -30,
    marginTop: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  imgprincipal: {
    width: 320,
    height: 160,
    marginTop: 50,
  },
});
