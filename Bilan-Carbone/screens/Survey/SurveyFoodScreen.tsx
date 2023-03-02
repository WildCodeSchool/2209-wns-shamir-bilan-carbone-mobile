import { View, Text, StyleSheet, Alert, ImageBackground } from "react-native";
// import { Button } from "react-native-elements";
import { Button } from "@rneui/themed";
import React, { useState } from "react";
import Header from "../../components/Food/Header";
import { CheckBox } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import ICarbon from "../../interface/ICarbon";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import SplashScreen from "../Splash/SplashScreen";
import { colors } from "../../assets/constants";
import { color } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SurveyFoodScreen({ navigation }: any) {
  const initialCategories: ICarbon[] = [
    { category: "Fruits", checked: false },
    { category: "Légumes", checked: false },
    { category: "Viande", checked: false },
    { category: "Snacks", checked: false },
    { category: "Cheese", checked: false },
    { category: "Dessert", checked: false },
  ];

  const [categories, setCategories] = useState(initialCategories);
  Font.loadAsync({
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Bold.ttf"),
  });

  let [fontsLoaded] = useFonts({
    "open-sans": require("../../assets/fonts/RobotoCondensed-Regular.ttf"),
    "open-sans-bold": require("../../assets/fonts/RobotoCondensed-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <SplashScreen navigation={undefined} />;
  }

  const food: any = [];

  const handleCheckBox = (index: number) => {
    setCategories((prevState) => {
      prevState[index].checked = !prevState[index].checked;
      return [...prevState];
    });
  };

  const selectedCategories = categories
    .filter((category) => category.checked)
    .map((category) => category.category);

  console.log(selectedCategories);
  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground
        source={require("../../assets/images/light-green-square-bg.png")}
        style={{ flex: 1, width: "100%" }}
      >
        <View style={styles.formWrap}>
          <Text style={styles.title}>Mes repas: </Text>

          <View>
            {categories.map((category, index) => (
              <View key={category.category}>
                <CheckBox
                  title={category.category}
                  checked={category.checked}
                  textStyle={{
                    color: "#073B3A",
                    fontSize: 18,
                    fontFamily: "Roboto",
                  }}
                  uncheckedColor="#073B3A"
                  checkedColor="#073B3A"
                  containerStyle={{
                    width: "80%",
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    paddingTop: 0,
                    paddingBottom: 0,
                  }}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  size={35}
                  onPress={() => handleCheckBox(index)}
                />
              </View>
            ))}
          </View>
          <Text style={{ paddingTop: 10, fontFamily: "Roboto" }}>
            Catégories sélectionnées: {selectedCategories.join(", ")}
          </Text>

          <Button
            title="Suivant"
            buttonStyle={{
              backgroundColor: colors.primary,
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
            onPress={(selectedCategories) =>
              navigation.navigate("SurveyFoodSearch")
            }
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
    fontFamily: "Roboto-Condensed",
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
