import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import IFood from "../../interface/IFood";
import { Button } from "@rneui/themed";

const ProductComponent = ({
  carbonItem,
  handleAddToChoiceList,
}: {
  carbonItem: IFood;
  handleAddToChoiceList: () => void;
}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => handleAddToChoiceList(carbonItem)}>
        <Text
          style={{ paddingTop: 4, fontSize: 18, color: "#808080" }}
          key={carbonItem._i}
        >
          {carbonItem.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductComponent;
