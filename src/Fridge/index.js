import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import Layout from "../components/Layout";
import Entrance from "../components/Entrance";
import { getFridge, getIngredients, setFridge } from "../redux/actions";
import { Fridge as FridgeComponent } from "../components/Fridge";
import Ingredient from "../components/Ingredient";

const windowHeight = Dimensions.get("window").height - 90;

export const Fridge = ({ navigation }) => {
  const [SearchText, setSearchText] = useState("");
  const [Ingredients, setIngredients] = useState([]);
  const [FridgeList, setFridgeList] = useState([]);

  useEffect(() => {
    if (Ingredients.length === 0) {
      getIngredients((v) => handleSets(v));
    }
  }, [Ingredients]);

  const goNext = () => {
    alert("save");
  };

  const removeIngredient = () => {
    
  }

  const handleSets = async (v) => {
    let list = [];

    setIngredients(v);
    await getFridge((r) => {
      r.map((item) => {
        list.push(v.filter((x) => x.idIngredient == item));
      });
    });

    setFridgeList(list);
  };

  console.log(Ingredients)

  return (
    <Layout navigation={navigation} main>
      <Entrance>
        <Text style={styles.title}>O que tens em casa? 🏡</Text>
      </Entrance>
      {Ingredients.length > 0 && (
        <View style={styles.foodContainer}>
          <Entrance>
            <FridgeComponent
              action={goNext}
              SearchText={SearchText}
              setSearchText={setSearchText}
              list={Ingredients}
            />
          </Entrance>
        </View>
      )}
      <View style={styles.fridgeContainer}>
        {FridgeList.length > 0 &&
          FridgeList.map((item, i) => (
            <Ingredient
              active={true}
              onSelect={() => console.log("oh yeah")}
              item={item[0]}
              key={i}
            />
          ))}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 25,
    marginLeft: 45,
    marginRight: 45,
  },
  container: {
    height: windowHeight,
  },
  foodContainer: {
    marginLeft: 45,
    marginRight: 45,
  },
  fridgeContainer: {
    height: "100%",
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 150
  },
});

export default Fridge;
