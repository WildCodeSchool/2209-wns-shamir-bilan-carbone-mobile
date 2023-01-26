import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }: { navigation: any }) {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 3000);

  if (!timePassed) {
    return (
      <View style={styles.splash}>
        <Text>Splash Screen</Text>
      </View>
    );
  }
  navigation.navigate("Onboarding");
  return null;
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#22bd4b",
  },
});
