import { View, Text, StyleSheet, Alert, ImageBackground } from "react-native";
// import { Button } from "react-native-elements";
import { Button } from "@rneui/themed";
import React, { useState } from "react";
import Header from "../../components/Food/Header";
import { CheckBox } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SurveyFoodScreen() {
  const [fruits, setFruits] = useState(false);
  const [vegs, setVegs] = useState(false);
  const [meet, setMeet] = useState(false);
  const [snacks, setSnacks] = useState(false);
  const [dessert, setDessert] = useState(false);

  const food = [];

  const click = () => {
    if (fruits === true) {
      food.push("fruits");
    }
    if (vegs === true) {
      food.push("Snacks");
    }
    if (meet === true) {
      food.push("meet");
    }
    if (snacks === true) {
      food.push("snacks");
    }
    if (dessert === true) {
      food.push("dessert");
    }

    Alert.alert("Food", "Hello , your food choice is " + food.toString());
  };

  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground
        source={require("../../assets/light-green-square-bg.png")}
        style={{ flex: 1, width: "100%" }}
      >
        <View style={styles.formWrap}>
          <Text style={styles.title}>My choice of meals: </Text>

          <View style={styles.cbWrapper}>
            <MaterialCommunityIcons
              name="fruit-pineapple"
              style={styles.foodIcon}
            />
            <CheckBox
              title="Fruits"
              textStyle={{
                color: "#073B3A",
                fontSize: 18,
                fontFamily: "monospace",
                // textTransform: "uppercase",
              }}
              checked={fruits}
              checkedColor="#073B3A"
              onPress={() => setFruits(!fruits)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={35}
              containerStyle={{
                width: "80%",
                backgroundColor: "transparent",
                borderColor: "transparent",
                paddingTop: 0,
                paddingBottom: 0,
              }}
            />
          </View>

          <View style={styles.cbWrapper}>
            <FontAwesome5 name="carrot" style={styles.foodIcon} />
            <CheckBox
              title="Vegetables"
              textStyle={{
                color: "#073B3A",
                fontSize: 18,
                fontFamily: "monospace",
                // textTransform: "uppercase",
              }}
              checked={vegs}
              checkedColor="#073B3A"
              onPress={() => setVegs(!vegs)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={35}
              containerStyle={{
                width: "80%",
                backgroundColor: "transparent",
                borderColor: "transparent",
                paddingTop: 0,
                paddingBottom: 0,
              }}
            />
          </View>

          <View style={styles.cbWrapper}>
            <MaterialCommunityIcons name="food-steak" style={styles.foodIcon} />
            <CheckBox
              title="Meat"
              textStyle={{
                color: "#073B3A",
                fontSize: 18,
                fontFamily: "monospace",
                // textTransform: "uppercase",
              }}
              checked={meet}
              checkedColor="#073B3A"
              onPress={() => setMeet(!meet)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={35}
              containerStyle={{
                width: "80%",
                backgroundColor: "transparent",
                borderColor: "transparent",
                paddingTop: 0,
                paddingBottom: 0,
              }}
            />
          </View>

          <View style={styles.cbWrapper}>
            <Ionicons name="fast-food" style={styles.foodIcon} />
            <CheckBox
              title="Snacks"
              textStyle={{
                color: "#073B3A",
                fontSize: 18,
                fontFamily: "monospace",
                // textTransform: "uppercase",
              }}
              checked={snacks}
              checkedColor="#073B3A"
              onPress={() => setSnacks(!snacks)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={35}
              containerStyle={{
                width: "80%",
                backgroundColor: "transparent",
                borderColor: "transparent",
                paddingTop: 0,
                paddingBottom: 0,
              }}
            />
          </View>

          <View style={styles.cbWrapper}>
            <MaterialCommunityIcons name="cupcake" style={styles.foodIcon} />
            <CheckBox
              title="Dessert"
              textStyle={{
                color: "#073B3A",
                fontSize: 18,
                // textTransform: "uppercase",
                fontFamily: "monospace",
              }}
              checked={dessert}
              checkedColor="#073B3A"
              onPress={() => setDessert(!dessert)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={35}
              containerStyle={{
                width: "80%",
                backgroundColor: "transparent",
                borderColor: "transparent",
                paddingTop: 0,
                paddingBottom: 0,
              }}
            />
          </View>
          <Button
            title="Save"
            buttonStyle={{
              backgroundColor: "#a4031f",
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
            onPress={click}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  formWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    color: "#073b3a",
    fontSize: 20,
    fontFamily: "monospace",
    fontWeight: "bold",
    paddingTop: 30,
    paddingBottom: 20,
    left: 0,
    top: 0,
  },
  foodIcon: {
    color: "#073b3a",
    fontSize: 40,
    padingRight: 20,
    paddingLeft: 40,
  },
  cbWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
