import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { Button } from "@rneui/themed";

const CarbonItem = ({ carbonResult }) => {
  const { name, _i } = carbonResult;
  return <Text style={{ fontSize: 18 }}>{name}</Text>;
};

export default CarbonItem;
