import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import SplashScreen from "../screens/Splash/SplashScreen";
import { RootStackParamList } from "./routes";
import { StackNavigator } from "./StackNavigator";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigator = () => {
  const [showSplash, setShowSplash] = useState<Boolean>(true);

  useEffect(() => {
    setInterval(() => {
      setShowSplash(false);
    }, 3000);
  });

  if (showSplash) {
    return <SplashScreen navigation={undefined} />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="StackNavigator"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
