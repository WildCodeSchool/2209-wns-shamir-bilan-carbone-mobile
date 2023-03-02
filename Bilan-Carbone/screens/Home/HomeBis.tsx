import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Avatar, Icon, ListItem } from "@rneui/themed";
import { colors } from "../../assets/themes.json";

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

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const HomeBis = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const [expanded, setExpanded] = useState(false);

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor =
      item.id === selectedId ? colors.primary : colors.secondary;
    const color = item.id === selectedId ? "white" : "black";

    return (
      <ListItem.Accordion
        content={
          <>
            <Icon name="place" size={30} />
            <ListItem.Content>
              <Text>{item.title}</Text>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        <ListItem.Content
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <TextInput placeholder="Quantité" />
          <TouchableOpacity onPress={() => console.log("test")}>
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
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomeBis;
