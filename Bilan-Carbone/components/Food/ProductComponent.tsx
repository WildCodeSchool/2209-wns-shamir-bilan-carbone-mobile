import React from "react";
import { View, Text } from "react-native";
import IFood from "../../interface/IFood";

const ProductComponent = ({ carbonItem }) => {
  return (
    <View>
      <Text key={carbonItem._i}>{carbonItem.name}</Text>
    </View>
  );
};

export default ProductComponent;
