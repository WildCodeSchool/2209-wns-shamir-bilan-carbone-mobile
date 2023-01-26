import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <View style={styles.login}>
      <Text>LoginScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#32C481",
  },
});
