import React from "react";
import { View } from "react-native";
import ProductComponent from "./ProductComponent";

const ProductListComponent = ({ filteredData, handleAddToChoiceList }) => {
  return (
    <View>
      {filteredData.map((carbonItem) => (
        <ProductComponent
          carbonItem={carbonItem}
          handleAddToChoiceList={handleAddToChoiceList}
        />
      ))}
    </View>
  );
};

export default ProductListComponent;
