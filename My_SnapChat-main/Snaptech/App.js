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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Index from "./Components/Index";
import Post from "./Components/Post";
import List from "./Components/List";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  login: null,
  token: null,
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Index />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Index"
          component={Index}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Post"
          component={Post}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="List"
          component={List}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
