import {
  View,
  Text,
  Switch,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { colors } from "../../assets/constants";

export default function ProfileScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Paramètres</Text>
        <View style={styles.separator}></View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Notifications</Text>
          <Switch
            trackColor={{ false: colors.brown, true: colors.brown }}
            thumbColor={true ? colors.secondary : colors.brown}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {}}
            value={true}
          />
        </View>
        <View style={styles.settingsContainer}>
          <Text>Politique de confidentialité</Text>
          <Text>Mentions Légales</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    borderWidth: 1,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  switchText: {
    fontSize: 16,
  },
  settingsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "80%",
  },
});
