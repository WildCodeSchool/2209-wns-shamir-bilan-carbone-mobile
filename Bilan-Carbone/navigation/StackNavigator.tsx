import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import LandingScreen from "../screens/Landing/LandingScreen";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import { TabNavigator } from "./TabNavigator";
import { CartProvider } from "../context/MealsContext";
import { RecipesList } from "../screens/Recipe/RecipesList";
import { RecipeDetails } from "../screens/Recipe/RecipeDetails";
import { Cart } from "../screens/Meal/Meals";
import { CartIcon } from "../components/Meal/MealsIcon";
import React from "react";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <CartProvider>
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Recipes' component={RecipesList} 
          options={({ navigation }) => ({
            title: 'Recettes',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='RecipeDetails' component={RecipeDetails} 
          options={({ navigation }) => ({
            title: 'Recette',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Repas' component={Cart} 
          options={({ navigation }) => ({
            title: 'Mes repas',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});