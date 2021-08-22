import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar
} from "react-native";
import image from "../../assets/images/fundo-welcome.png";
import logo from "../../assets/logo.png";
import Step1 from "../components/Welcome/1";
import Step2 from "../components/Welcome/2";
import Step3 from "../components/Welcome/3";
import Step4 from "../components/Welcome/4";

export const Login = ({ navigation }) => {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && (
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Step1 setStep={() => setStep(1)} />
          </View>
        </ImageBackground>
      )}
      {step === 1 && (
        <View style={styles.colorContainer}>
          <Step2 setStep={() => setStep(2)} />
        </View>
      )}
      {step === 2 && (
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Step3 setStep={() => setStep(3)} />
          </View>
        </ImageBackground>
      )}
      {step === 3 && (
        <View style={styles.colorContainer}>
          <Step4 goNext={() => navigation.navigate("Dashboard")} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    margin: 45,
  },
  colorContainer: {
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 45,
    paddingRight: 45,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 130,
    height: 37,
    marginTop: 50,
    marginBottom: -100,
  },
});

export default Login;
