import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { DonutChart } from "react-native-circular-chart";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabNavigator } from "../../navigation/TabNavigator";

const datas = [
  { name: "Voiture", value: 10, color: "#faf3e0" },
  { name: "Repas", value: 20, color: "#eabf9f" },
  { name: "Numérique", value: 30, color: "#28527a" },
];

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.sectionWrapper}>
          <DonutChart
            data={datas}
            strokeWidth={15}
            radius={90}
            containerWidth={300}
            containerHeight={200 * 2}
            type="round"
            startAngle={0}
            endAngle={360}
            animationType="slide"
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "lightgray",
    backgroundColor: "#ffffff",
    marginVertical: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
