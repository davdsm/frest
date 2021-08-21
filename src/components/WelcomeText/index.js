import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

export const WelcomeText = ({ title, text, buttonText, buttonAction }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{text}</Text>
      </View>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={buttonAction}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
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
    overflow: "hidden",
  },
  box: {
    position: "absolute",
    bottom: 130,
    width: "100%",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    width: "65%",
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
    width: "70%",
    marginTop: 30,
    marginBottom: 48,
  },
  buttons: {
    position: "absolute",
    bottom: 74,
    left: 0,
    right: 90,
  },
  button: {
    height: 52,
    color: "#000",
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#5EBDD6",
    fontSize: 15,
  },
  borderButton: {
    height: 52,
    color: "#000",
    width: "100%",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBorderText: {
    color: "#fff",
    fontSize: 15,
  },
});

export default WelcomeText;
