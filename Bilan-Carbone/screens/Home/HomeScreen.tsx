import { View, StyleSheet, FlatList } from "react-native";
import { Button } from "@rneui/themed";
import React from "react";
import { DonutChart } from "react-native-circular-chart";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../assets/themes.json";

const datas = [
  { name: "Voiture", value: 10, color: colors.primary },
  { name: "Repas", value: 20, color: colors.secondary },
  { name: "Numérique", value: 30, color: colors.brown },
];

export default function HomeBis({ navigation }: any) {
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
          <Button
            title="Suivant"
            buttonStyle={{
              backgroundColor: "#9ae19d",
              borderWidth: 0,
              borderColor: "white",
              borderRadius: 50,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 5,
              marginVertical: 5,
            }}
            titleStyle={{ fontWeight: "bold" }}
            onPress={() => navigation.navigate("SurveyFood")}
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
