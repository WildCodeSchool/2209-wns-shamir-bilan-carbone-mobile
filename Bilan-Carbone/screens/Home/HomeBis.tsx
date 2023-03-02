import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon, ListItem } from "@rneui/themed";
import { COLORS } from "../../assets/constants";

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: "1",
    title: "Pâtes carbonara",
  },
  {
    id: "2",
    title: "Lasagnes végétariennes",
  },
  {
    id: "3",
    title: "Poulet au curry",
  },
  {
    id: "4",
    title: "Dahl aux lentilles",
  },
];

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
        <ListItem.Content
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text onPress={() => setCount(count - 1)}>-</Text>
          <Text style={{ fontSize: 20 }}>{count}</Text>
          <Text onPress={() => setCount(count + 1)}>+</Text>
          <TouchableOpacity
            onPress={() => alert("Portion ajoutée avec succès !")}
          >
            <Text>Valider</Text>
          </TouchableOpacity>
        </ListItem.Content>
      </ListItem.Accordion>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
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
    backgroundColor: COLORS.LIGHT_BLUE,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});

export default HomeBis;
