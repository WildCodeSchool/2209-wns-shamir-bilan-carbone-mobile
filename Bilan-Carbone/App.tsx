import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainNavigator } from "./navigation/MainNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return <MainNavigator />;
}
