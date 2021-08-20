import React from "react";
import { Text, View, StyleSheet } from "react-native";
import WelcomeText from "../../components/WelcomeText";

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <WelcomeText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default Welcome;
