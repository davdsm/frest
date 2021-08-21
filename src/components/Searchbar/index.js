import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export const Searchbar = ({ SearchText, setSearchText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(v) => setSearchText(v)}
        value={SearchText}
        placeholder="Procurar..."
      />
      <View style={styles.lupa}>
        <Icon name="search" color="#D1C9C9" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    borderWidth: 1,
    borderColor: "#D1C9C9",
    borderRadius: 6,
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  input: {
    width: "90%",
  },
  lupa: {
    width: "10%",
  },
});

export default Searchbar;
