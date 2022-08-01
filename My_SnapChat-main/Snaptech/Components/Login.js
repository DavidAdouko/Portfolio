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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onRegisterPress = () => {
    navigation.navigate("Register");
  };

  const login = async () => {
    const response = await fetch("http://snapi.epitech.eu:8000/connection", {
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

    if (body.data == "Incorrect email or password") {
      console.log("Email ou mot de passe incorrect");
    } else {
      global.token = body.data.token;
      global.email = body.data.email;

      console.log(global.token);
      navigation.navigate("Post");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/snapchatlogo.png")}
      />

      <Text style={styles.screenTitle}>Connexion</Text>

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

      <TouchableOpacity onPress={login} style={styles.loginBtn}>
        <Text style={styles.loginText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onRegisterPress}>
        <Text style={styles.forgot_button}>
          Pas de compte ? Inscrivez vous !
        </Text>
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

  screenTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
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
    borderWidth: 1,
    backgroundColor: "#FFFC00",
    borderColor: "black",
  },
});
