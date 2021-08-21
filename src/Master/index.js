import React from "react";
import { Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const checkLogin = async (navigation) => {
  try {
    const user = await AsyncStorage.getItem("user_name");
    if (user !== null) {
      // aqui
      const remove = await AsyncStorage.removeItem("user_name");
      navigation.navigate("Login");
      // aqui
      
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
