import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon, ListItem } from "@rneui/themed";
import { COLORS, FONTS } from "../../assets/constants";

type ItemData = {
  id: string;
  title: string;
  expanded?: boolean;
};

const data: ItemData[] = [
  {
    id: "1",
    title: "Pâtes carbonara",
    expanded: false,
  },
  {
    id: "2",
    title: "Lasagnes végétariennes",
    expanded: false,
  },
  {
    id: "3",
    title: "Poulet au curry",
    expanded: false,
  },
  {
    id: "4",
    title: "Dahl aux lentilles",
    expanded: false,
  },
];

export function getRecipe(id: ItemData["id"]) {
  return data.find((recipe) => (recipe.id == id));
}

const HomeBis = () => {
  const [expanded, setExpanded] = useState(false);
  const [count, setCount] = useState(0);

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <ListItem.Accordion
        content={
          <>
            <Icon name="star" size={30} />
            <ListItem.Content style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
        bottomDivider
      >
        <ListItem.Content style={styles.accordionContent}>
          <View style={styles.counter}>
            <Text onPress={() => setCount(count - 1)}>-</Text>
            <Text>{count}</Text>
            <Text onPress={() => setCount(count + 1)}>+</Text>
          </View>
          <TouchableOpacity
            onPress={() => alert("Portion ajoutée avec succès !")}
          >
            <Text style={{ fontFamily: FONTS.MAIN, fontSize: 16, margin: 10 }}>
              Valider
            </Text>
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem.Accordion>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: COLORS.LIGHT_BROWN,
  },
  accordionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.VERY_LIGHT_GREEN,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 22,
    fontFamily: FONTS.MAIN,
  },
  counter: {
    width: 90,
    height: 30,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.LIGHT_BLUE,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default HomeBis;
