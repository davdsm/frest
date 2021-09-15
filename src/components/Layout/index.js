import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Logo from "../../../assets/logo.png";
import Entrance from "../Entrance";
import { Icon } from "react-native-elements/dist/icons/Icon";

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

export const Layout = ({ children, navigation, layout, mealId, main }) => {
  // check login
  checkLogin(navigation);

  return (
    <ScrollView
      style={main ? styles.layoutP : styles.layout}
      horizontal={false}
      vertical={true}
    >
      <View style={styles.header}>
        {layout !== "minimal" && (
          <Entrance>
            <Image source={Logo} style={styles.logo} />
          </Entrance>
        )}
        {layout === "minimal" && (
          <Entrance>
            <View style={styles.iconsHeader}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon style={styles.icon} name="chevron-left" />
              </TouchableOpacity>
              {/* <TouchableOpacity>
                <Icon style={styles.icon} name="favorite" />
              </TouchableOpacity> */}
            </View>
          </Entrance>
        )}
      </View>
      <Entrance>{children}</Entrance>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: "100%",
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 80,
  },
  layoutP: {
    height: "100%",
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 80,
    marginBottom: 50,
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
  iconsHeader: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    fontSize: 50,
  },
});

export default Layout;
