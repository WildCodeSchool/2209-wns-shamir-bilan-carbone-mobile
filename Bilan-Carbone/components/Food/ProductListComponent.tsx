import React from "react";
import { View } from "react-native";
import ProductComponent from "./ProductComponent";

const ProductListComponent = ({ filteredData }) => {
  return (
    <View>
      {filteredData.map((carbonItem) => (
        <ProductComponent carbonItem={carbonItem} />
      ))}
    </View>
  );
};

export default ProductListComponent;
