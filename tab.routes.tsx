import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Consultas from '../screens/Consultas';
import {Feather} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({color,size}) => <Feather name="home" color={color} size={size}></Feather>}} />
      <Tab.Screen name="Consultas" component={Consultas} options={{ tabBarIcon: ({ color, size}) => <Feather name="book-open" color={color} size={size}></Feather>}} />
    </Tab.Navigator>
  );
}