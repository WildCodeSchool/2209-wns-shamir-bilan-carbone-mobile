import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeBis from "../screens/Home/HomeBis";
import InfosScreen from "../screens/Infos/InfosScreen";
import { RecipesList } from "../screens/Recipe/RecipesList";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Recettes") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Infos") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Profil") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#9ae19d",
        tabBarInactiveTintColor: "#8a817c",
      })}
    >
      <Tab.Screen name="Recettes" component={RecipesList} />
      <Tab.Screen name="Infos" component={InfosScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
