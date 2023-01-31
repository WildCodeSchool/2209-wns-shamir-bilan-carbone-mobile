import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { useFonts } from "expo-font";
import LandingScreen from "../Landing/LandingScreen";

const slides = [
  {
    key: "one",
    title: "Mesurer",
    text: "Avoir un suivi régulier de son empreinte carbone, c'est possible !",
    image: require("../../assets/onboarding-slide-one.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Analyser",
    text: "Nous vous aidons à comprendre l'impact de vos habitudes de consommation.",
    image: require("../../assets/onboarding-slide-two.png"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Agir",
    text: "Grâce à nos conseils, réduire votre empreinte carbone n'aura jamais été aussi simple !",
    image: require("../../assets/onboarding-slide-three.png"),
    backgroundColor: "#22bcb5",
  },
];

export default function OnboardingScreen() {
  const [showRealApp, setShowRealApp] = useState(false);
  const [fontsLoaded] = useFonts({
    "Roboto-Condensed": require("../../assets/fonts/RobotoCondensed-Bold.ttf"),
  });

  const renderItem = ({
    item,
  }: {
    item: {
      title: string;
      text: string;
      image: any;
    };
  }) => {
    return (
      <View style={styles.slides}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    setShowRealApp(true);
  };

  return (
    <>
      {showRealApp ? (
        <LandingScreen />
      ) : (
        <AppIntroSlider data={slides} renderItem={renderItem} onDone={onDone} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titleStyle: {
    fontSize: 22,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  paragraphStyle: {
    textAlign: "center",
    color: "#34495e",
    marginBottom: 5,
  },
  slides: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#bcebce",
  },
  title: {
    marginTop: 50,
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto-Condensed",
  },
  text: {
    marginBottom: 45,
    color: "#000",
    textAlign: "center",
    fontFamily: "Roboto-Condensed",
    fontSize: 20,
  },
  image: {
    width: 400,
    height: 400,
  },
});
