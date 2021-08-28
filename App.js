import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Master from "./src/Master";
import Login from "./src/Login";
import Meal from "./src/Meal";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Master} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Dashboard" component={TabStack} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Meal" component={Meal} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
