import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import LandingScreen from "../screens/Landing/LandingScreen";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import SurveyScreen from "../screens/Survey/SurveyScreen";
import SurveyFoodScreen from "../screens/Survey/SurveyFoodScreen";
import SurveyFoodSearchScreen from "../screens/Survey/SurveyFoodSearchScreen";
import { TabNavigator } from "./TabNavigator";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Survey" component={SurveyScreen} />
      <Stack.Screen name="SurveyFood" component={SurveyFoodScreen} />
      <Stack.Screen
        name="SurveyFoodSearch"
        component={SurveyFoodSearchScreen}
      />
    </Stack.Navigator>
  );
};
