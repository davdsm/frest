import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from "../../../assets/logo.png";
import Entrance from "../../components/Entrance";
import Fridge from "../../components/Fridge";
import { getIngredients } from "../../redux/actions";

export const Step4 = () => {
  const [SearchText, setSearchText] = useState("");
  const [Ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (Ingredients.length === 0) {
      getIngredients((v) => setIngredients(v));
    }
  }, [Ingredients]);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View>
        <Entrance>
          <Image source={Logo} style={styles.logo} />
        </Entrance>
        <Entrance>
          <Text style={styles.subtitle}>O que tens em casa?</Text>
        </Entrance>
        {Ingredients.length > 0 && (
          <Entrance>
            <Fridge
              SearchText={SearchText}
              setSearchText={setSearchText}
              list={Ingredients}
            />
          </Entrance>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  logo: {
    width: 130,
    height: 37,
    marginTop: 50,
    marginBottom: -100,
  },
  subtitle: {
    color: "#D1C9C9",
    fontSize: 17,
    marginTop: 140,
    fontWeight: "bold",
    marginBottom: 30,
  },
});

export default Step4;
