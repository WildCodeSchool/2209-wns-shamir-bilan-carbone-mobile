import React, { useState } from "react";
import { Modal, View, FlatList, StyleSheet } from "react-native";
import CarbonItem from "./CarbonItem";
import { Button } from "@rneui/base";

const ModalComponent = ({ choiceList }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Modal visible={open} style={styles.modal}>
        <Button title="close" onPress={() => setOpen(false)} />
        <FlatList
          data={choiceList}
          renderItem={({ item }) => <CarbonItem carbonResult={item} />}
          keyExtractor={(item, index) => index}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#9AE19D",
  },
});

export default ModalComponent;
