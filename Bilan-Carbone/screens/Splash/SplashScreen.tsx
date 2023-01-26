import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
// import LOGO from "../../assets/carbon-logo.png";

export default function SplashScreen({ navigation }: { navigation: any }) {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 3000);

  if (!timePassed) {
    return <View style={styles.splash}>{/* <Image source={LOGO} /> */}</View>;
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
