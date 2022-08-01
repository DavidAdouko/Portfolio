import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
  Alert,
} from "react-native";

export default function Index() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onRegisterPress = () => {
    navigation.navigate("Register");
  };

  const onLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/snapchatlogo.png")}
      />

      <StatusBar style="auto" />

      <Text style={styles.indexText}>Binvenue sur my_snapchat !</Text>

      <TouchableOpacity onPress={onLoginPress} style={styles.loginBtn}>
        <Text style={styles.loginText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onRegisterPress} style={styles.loginBtn}>
        <Text style={styles.loginText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 250,
    height: 250,
  },

  inputView: {
    backgroundColor: "black",
    borderRadius: 20,
    width: 250,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "back",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  indexText: {
    height: 50,
    marginBottom: 30,
    marginTop: 30,
    fontSize: 23,
    fontWeight: "bold",
  },

  loginBtn: {
    width: 280,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    borderWidth: 1,
    backgroundColor: "#FFFC00",
    borderColor: "black",

    camera: {},
  },
});
