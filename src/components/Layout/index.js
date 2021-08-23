import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Image, StyleSheet, StatusBar, ScrollView } from "react-native";
import Logo from "../../../assets/logo.png";
import Entrance from "../Entrance";

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
    navigation.navigate("Login");
  }
};

export const Layout = ({ children, navigation }) => {
  // check login
  checkLogin(navigation);

  return (
    <ScrollView style={styles.layout} horizontal={false} verticak={true}>
      <View style={styles.header}>
        <Entrance>
          <Image source={Logo} style={styles.logo} />
        </Entrance>
      </View>
      <Entrance>{children}</Entrance>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingTop: StatusBar.currentHeight,
    height: "100%",
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 80,
  },
  logo: {
    width: 105,
    height: 30,
  },
  header: {
    width: "100%",
    height: 77,
    paddingLeft: 45,
    paddingRight: 45,
  },
});

export default Layout;
