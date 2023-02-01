import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

let logo = require("../../assets/images/logo-white-just-reduce.png");

export default function SplashScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.splash}>
      <Image source={logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#90F0B1",
  },
});
