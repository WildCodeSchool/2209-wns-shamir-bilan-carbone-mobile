import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import LandingScreen from "../screens/Landing/LandingScreen";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import SurveyScreen from "../screens/Survey/SurveyScreen";
import { TabNavigator } from "./TabNavigator";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeTab"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Survey" component={SurveyScreen} />
    </Stack.Navigator>
  );
};
