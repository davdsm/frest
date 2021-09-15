import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import Categories from "../components/Categories";
import {
  getCategories,
  getFridge,
  getRandomMeal,
  getUserName,
} from "../redux/actions";
import RandomMeal from "../components/RandomMeal";

export const Master = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [Cats, setCats] = useState([]);
  const [Fridge, setFridge] = useState([]);
  const [Meal, setMeal] = useState(false);

  const getName = async () => {
    const username = await getUserName();
    setName(username);
  };

  useEffect(() => {
    if (!Name) {
      getName();
    }
    if (Cats.length === 0) {
      getCategories((v) => setCats(v));
    }
    if (Fridge.length === 0) {
      getFridge((v) => setFridge(v));
    }
    if (!Meal) {
      getRandomMeal(Fridge, (v) => setMeal(v.meals));
    }
  }, []);

  return (
    <Layout navigation={navigation} main>
      {Cats.length > 0 && Name.length > 0 && Fridge.length > 0 && (
        <>
          <Text style={styles.title}>Olá {Name}! 👋</Text>
          <Text style={styles.title}>O que estás à procura hoje? 🔥</Text>
          <Categories obj={Cats} />
          <RandomMeal meals={Meal} navigation={navigation} />
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {},
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 25,
    marginLeft: 45,
    marginRight: 45,
  },
});

export default Master;
