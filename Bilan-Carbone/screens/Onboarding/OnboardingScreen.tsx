import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function OnboardingScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.onboarding}>
      <Text>OnboardingScreen</Text>
      <Button
        title="Continuer"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  onboarding: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0F9EA",
  },
});
