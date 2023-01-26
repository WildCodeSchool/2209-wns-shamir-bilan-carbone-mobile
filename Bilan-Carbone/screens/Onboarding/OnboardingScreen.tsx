import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function OnboardingScreen() {
  return (
    <View style={styles.onboarding}>
      <Text>OnboardingScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  onboarding: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6694e3",
  },
});
