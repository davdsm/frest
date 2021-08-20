import React from "react";
import { Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const checkLogin = async (navigation) => {
  try {
    const value = await AsyncStorage.getItem("user_id");
    if (value !== null) {
      return true;
    } else {
      navigation.navigate("Login");
    }
  } catch (e) {
    console.log(e);
    navigation.navigate("Login");
  }
};

export const Master = ({ navigation }) => {
  // check login
  checkLogin(navigation);

  return (
    <View>
      <Text>Application</Text>
    </View>
  );
};

export default Master;
