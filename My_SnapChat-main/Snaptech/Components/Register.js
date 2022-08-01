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
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();

  const onLoginPress = () => {
    navigation.navigate("Login");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const response = await fetch("http://snapi.epitech.eu:8000/inscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const body = await response.json();

    if (body.data.email == "has already been taken") {
      console.log("L'email est déjà utilisé");
    }
    navigation.navigate("Login");
    console.log(body.data);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/snapchatlogo.png")}
      />

      <Text style={styles.screenTitle}>Inscription</Text>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#9a9a9c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#9a9a9c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={register}>
        <Text style={styles.loginText}>S'inscrire</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={onLoginPress}>
          Déjà inscrit ? Connectez vous !
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFC00",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
    width: 250,
    height: 250,
  },

  screenTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
  },

  inputView: {
    backgroundColor: "gray",
    borderRadius: 20,
    width: 250,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
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

  forgot_button: {
    height: 30,
    marginTop: 30,
  },

  loginBtn: {
    width: 280,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "black",
  },
});
