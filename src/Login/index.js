import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import image from "../../assets/images/fundo-welcome.png";
import Step1 from "../Welcome/1";

export const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.background}
      >
        <Step1 />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  background: {
    width: "100%",
    height: "100%",
  },
});

export default Login;
