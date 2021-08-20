import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const WelcomeText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>
          Ainda não sabes o que vais fazer agora?
        </Text>
        <Text style={styles.subtitle}>
          Vais descobrir o que cozinhar em menos de 3 minutos com o que já tens
          no teu frigorifico. Preenche o formulário e deixa a magia acontecer.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "#00a0df",
    position: "relative",
    height: "100%",
    width: "100%",
    margin: 45,
  },
  box: {
    position: "absolute",
    bottom: 74,
    width: "100%",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    width: "60%",
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
    width: "70%",
    marginTop: 30,
    marginBottom: 48,
  },
});

export default WelcomeText;
