import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import SplashScreen from "../screens/Splash/SplashScreen";
import { StackNavigator } from "./StackNavigator";

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  const [showSplash, setShowSplash] = useState<Boolean>(true);

  useEffect(() => {
    setInterval(() => {
      setShowSplash(false);
    }, 3000);
  });

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="StackNavigator"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
