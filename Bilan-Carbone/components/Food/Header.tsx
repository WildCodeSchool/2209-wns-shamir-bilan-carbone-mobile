import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Header() {
  return (
    <View style={styles.wrapContainer}>
      <View style={styles.topContainer}>
        <MaterialIcons name="food-bank" style={styles.foodIcon} />
        <Image
          style={styles.logo}
          // style={{ width: 100, height: 100 }}
          source={{
            uri: "https://img.icons8.com/fluency/96/null/natural-food.png",
          }}
        />
      </View>

      <Text style={styles.title}>Hebdomadaire</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapContainer: {
    height: "20%",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  topContainer: {
    flexDirection: "row",
    // backgroundColor: "red",
    width: 350,
    justifyContent: "center",
  },
  foodIcon: {
    color: "#073b3a",
    fontSize: 80,
    position: "absolute",
    left: 0,
    top: 0,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    color: "#073b3a",
    fontSize: 26,
    fontFamily: "monospace",
  },
});
