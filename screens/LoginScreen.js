import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imgprincipal}
        source={require("../src/imgs/shurteam.png")}
      ></Image>
      <Text style={styles.titulo}>Shur Team</Text>
      <Text style={styles.subtitulo}>Reloaded</Text>
      <Image
        style={styles.telegram}
        source={require("../src/imgs/telegram.png")}
      ></Image>

      <TextInput
        style={styles.input}
        placeholder="shurteam@gmail.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        style={styles.input2}
        placeholder="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      ></TextInput>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.button}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 50,
    color: "black",
  },
  subtitulo: {
    fontSize: 30,
    color: "orange",
  },
  imgprincipal: {
    width: 180,
    height: 180,
    marginTop: 50,
  },
  telegram: {
    width: 60,
    height: 60,
    marginTop: 20,
    marginBottom: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "70%",
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 20,
  },
  input2: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: "70%",
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 10,
    fontSize: 20,
  },
  buttonContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#0782f9",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    padding: 7,
    borderRadius: 10,
    color: "white",
    fontSize: 20,
  },
});
export default LoginScreen;
