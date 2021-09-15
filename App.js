import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Master from "./src/Master";
import Fridge from "./src/Fridge";
import Login from "./src/Login";
import Meal from "./src/Meal";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#3C969C",
        tabBarInactiveTintColor: "#6E8486",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
            height: 50,
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.96)",
            position: "absolute",
            borderTopWidth: 0,
            elevation: 0,
          },
          null,
        ],
      })}
    >
      <Tab.Screen
        name="Feed"
        component={Master}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="noodles" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Frigde"
        component={Fridge}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fridge" color={color} size={size} />
          ),
        }}
      />
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
