import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function SplashScreen({ navigation }: { navigation: any }) {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 3000);

  if (!timePassed) {
    return (
      <View style={styles.splash}>
        <Text>LOGO</Text>
      </View>
    );
  }
  // navigation.navigate("Onboarding");
  // navigation.navigate("Register");
  navigation.navigate("Landing");
  return null;
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#90F0B1",
  },
});
