import React from "react";
import { Text, View, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import Entrance from "../Entrance";

export const Ingredient = ({ item, onSelect, active }) => {
  return (
    <TouchableOpacity>
      <Pressable onPress={onSelect}>
        <View style={styles.container}>
          <View style={styles.imageSquare}>
            <Image
              style={styles.image}
              source={{
                uri: `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png`,
              }}
            />
          </View>
          <Text style={styles.name}>{item.strIngredient}</Text>
          {active && (
            <View style={styles.checkSquare}>
              <Entrance>
                <Icon name="check" color="#fff" size={13} />
              </Entrance>
            </View>
          )}
        </View>
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 56,
    backgroundColor: "#FAF9FE",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 34,
    height: 26,
  },
  imageSquare: {
    width: 41,
    height: 41,
    padding: 5,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 14,
    color: "#272727",
    marginLeft: 12,
  },
  checkSquare: {
    backgroundColor: "#4FA9AE",
    borderRadius: 6,
    width: 26,
    height: 26,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 12,
  },
});

export default Ingredient;
