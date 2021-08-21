import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Button from "../../components/Button";
import Entrance from "../../components/Entrance/";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Step2 = ({ setStep }) => {
  const [Name, setName] = useState("");

  const handleSuccess = async () => {
    await AsyncStorage.setItem("user_name", Name);
    setStep();
  };

  return (
    <View style={styles.container}>
      <Entrance style={styles.box}>
        <Text style={styles.introText}>⚡ Diz-me o teu nome...</Text>
        <TextInput
          style={styles.input}
          onChangeText={(v) => setName(v)}
          value={Name}
          placeholder="Carla Alexandra..."
        />

        {Name.length > 2 && (
          <View style={styles.button}>
            <Entrance style={styles.box}>
              <Button label="Continuar" action={handleSuccess} icon="chevron-right" />
            </Entrance>
          </View>
        )}
      </Entrance>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "100%",
  },
  introText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    fontSize: 22,
    marginTop: 30,
    fontWeight: "bold",
    paddingLeft: 34,
    color: "#D1C9C9",
  },
  button: {
    marginTop: 35,
    marginLeft: 34,
  },
});

export default Step2;
