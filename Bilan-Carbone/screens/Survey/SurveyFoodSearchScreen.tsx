import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import Header from "../../components/Food/Header";
import { useQuery } from "@apollo/client";
import { CARBON_QUERY } from "../../gql/Query";
import IFood from "../../interface/IFood";
import ProductListComponent from "../../components/Food/ProductListComponent";
import { colors } from "../../assets/themes.json";

export default function SurveyFoodSearchScreen({ navigation }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data, loading, error } = useQuery(CARBON_QUERY, {
    onCompleted: ({ results }) => setFilteredData(results),
  });

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    setFilteredData(
      data.results.filter((carbonItem: { name: string }) =>
        carbonItem.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Header />

      <TextInput
        value={searchTerm}
        onChangeText={handleSearch}
        style={{
          fontSize: 15,
          padding: 10,
          width: "95%",
          alignItems: "center",
          backgroundColor: "#d9dbda",
          borderColor: "green",
        }}
        placeholder="Search result"
      />

      <ProductListComponent filteredData={filteredData} />

      <Button
        title="Suivant"
        buttonStyle={{
          backgroundColor: colors.brown,
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 15,
  },
});
