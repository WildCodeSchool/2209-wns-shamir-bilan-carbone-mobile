import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LandingScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#0F683E" }}
    >
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.buttonTextStyle}>Me connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate("Onboarding");
        }}
      >
        <Text style={styles.buttonTextStyle}>M'inscrire</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#32C481",
    textDecoration: "none",
    color: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
