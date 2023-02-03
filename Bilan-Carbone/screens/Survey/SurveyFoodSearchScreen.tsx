import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
  Keyboard,
  Platform,
} from "react-native";
import Slider from "@react-native-community/slider";

import { Button } from "@rneui/themed";
import Header from "../../components/Food/Header";
import { useQuery } from "@apollo/client";
import { CARBON_QUERY } from "../../gql/Query";
import IFood from "../../interface/IFood";
import ProductListComponent from "../../components/Food/ProductListComponent";
import CarbonItem from "../../components/Food/CarbonItem";
import SurveyFoodScreen from "./SurveyFoodScreen";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function SurveyFoodSearchScreen({ navigation }: any) {
  const [searchTerm, setSearchTerm] = useState<string | null>("");
  const [filteredData, setFilteredData] = useState<IFood[]>([]);
  const [allData, setAllData] = useState<IFood[]>([]);
  const [choiceList, setChoiceList] = useState<IFood[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [range, setRange] = useState(0);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const { data, loading, error } = useQuery(CARBON_QUERY, {
    onCompleted: ({ results }) => {
      setAllData(results);
      setFilteredData(results);
    },
  });

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    setFilteredData(
      allData.filter((carbonItem) =>
        carbonItem.name.toLowerCase().includes(text.toLowerCase())
      )
      // data.results.filter((carbonItem: { name: string }) =>
      //   carbonItem.name.toLowerCase().includes(text.toLowerCase())
      // )
    );
  };

  const handleAddToChoiceList = (carbonItem) => {
    setChoiceList([...choiceList, carbonItem]);
  };

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const keyboardHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  console.log(choiceList);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Header />

      <Button
        title="Ma liste"
        onPress={() => setOpen(true)}
        type="outline"
        containerStyle={{
          width: "95%",
          marginBottom: 2,
        }}
        titleStyle={{ color: "#073B3A", fontSize: 20 }}
        buttonStyle={{
          borderColor: "#073B3A",
          borderWidth: 4,
          backgroundColor: "white",
        }}
        icon={{
          name: "angle-right",
          type: "font-awesome",
          size: 40,
          color: "#073B3A",
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10 }}
      />

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#d9dbda",
          borderRadius: 15,
          borderStyle: "solid",
          alignItems: "center",
          padding: 5,
          width: "95%",
          marginTop: 10,
        }}
      >
        <Feather
          name="search"
          style={{ color: "#073B3A", fontSize: 30, marginLeft: 1 }}
        />
        <TextInput
          value={searchTerm}
          onChangeText={handleSearch}
          style={{
            fontSize: 15,
            padding: 10,
            width: "95%",
            alignItems: "center",
            backgroundColor: "transparent",
            borderColor: "green",
          }}
          placeholder="Recherche"
        />
      </View>

      <Modal visible={open} transparent={true}>
        <View style={styles.modal}>
          <Button
            title=""
            type="clear"
            onPress={() => setOpen(false)}
            icon={{
              name: "close",
              type: "font-awesome",
              size: 40,
              color: "white",
            }}
            iconRight
            // iconContainerStyle={{ marginLeft: 10 }}
          />

          <FlatList
            data={choiceList}
            renderItem={({ item }) => <CarbonItem carbonResult={item} />}
            keyExtractor={(item, index) => index}
          />

          <Text style={styles.textSlider}>{Math.floor(range)}</Text>
          <Slider
            style={styles.slider}
            onValueChange={(value) => setRange(value)}
            minimumValue={0}
            maximumValue={20}
            thumbTintColor="white"
          />
        </View>
      </Modal>

      <ScrollView>
        <ProductListComponent
          style={{ marginTop: 10, marginBottom: 10, marginLeft: 5 }}
          filteredData={filteredData}
          handleAddToChoiceList={handleAddToChoiceList}
        />
      </ScrollView>

      {keyboardVisible ? null : (
        <TouchableOpacity style={{ padding: 20 }}>
          <Button
            title="Next"
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
            onPress={() => navigation.navigate("Survey")}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  itemStyle: {
    padding: 15,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9AE19D",
    height: 400,
    width: "80%",
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "#fff",
    marginTop: 80,
    marginLeft: 40,
  },
  slider: {
    width: 200,
    height: 50,
    margin: 20,
  },
  textSlider: {
    fontSize: 20,
    color: "#a4031f",
    fontWeight: "bold",
  },
});
