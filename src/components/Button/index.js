import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import Entrance from "../Entrance";

export const Button = ({ label, action, icon }) => {
  return (
    <Pressable style={styles.button} onPress={action}>
      <Text style={styles.buttonText}>{label}</Text>
      {icon && (
        <Entrance>
          <Icon name={icon} size={19} color="#fff" />
        </Entrance>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 47,
    color: "#fff",
    width: "60%",
    backgroundColor: "#4FA9AE",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#4FA9AE",
    flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 25,
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Button;
