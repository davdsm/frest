import React from "react";
import { Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const checkLogin = async (navigation) => {
  try {
    const user = await AsyncStorage.getItem("user_name");
    if (user !== null) {
      /* // to logout
      const remove = await AsyncStorage.removeItem("user_name");
      navigation.navigate("Login"); */

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
