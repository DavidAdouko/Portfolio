import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";

export default function List() {
  const navigation = useNavigation();

  const listItems = global.liste
    .filter((list, idx) => idx < 10)
    .map((list, index) => (
      <Text
        onPress={() => {
          navigation.navigate("Post");
          alert("Contact selectionné : " + list["email"]);
        }}
        key={index}
        style={styles.userItem}
      >
        {list["email"]}
      </Text>
    ));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des contacts</Text>
      {listItems}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  userItem: {
    padding: 15,
    width: "100%",
    borderBottomWidth: 1,
    textAlign: "center",
  },

  title: {
    position: "absolute",
    top: 0,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
  },
});
