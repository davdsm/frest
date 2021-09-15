import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, StyleSheet } from "react-native";
import Entrance from "../Entrance";
import Ingredient from "../Ingredient";
import Searchbar from "../Searchbar";
import Button from "../Button";
import { setFridge } from "../../redux/actions";

export const Fridge = ({ SearchText, setSearchText, list, action }) => {
  const [Ingredients, setIngredients] = useState([]);
  const [SelectedIngredients, setSelectedIngredients] = useState([]);

  const selectIngredient = (ingredient_id) => {
    let _v = [...SelectedIngredients];
    if (SelectedIngredients.indexOf(ingredient_id) === -1) {
      _v.push(ingredient_id);
    } else {
      _v.splice(SelectedIngredients.indexOf(ingredient_id), 1);
    }
    setSelectedIngredients(_v);
  };

  const handleSubmit = async () => {
    await setFridge(SelectedIngredients);
    action();
  };

  useEffect(() => {
    if (SearchText && SearchText.length > 2) {
      let result = list.filter((item) =>
        item.strIngredient.toLowerCase().includes(SearchText.toLowerCase())
          ? item
          : null
      );
      setIngredients(result);
    } else {
      if (Ingredients.length > 0) {
        setIngredients([]);
      }
    }
  }, [SearchText]);

  return (
    <View style={styles.container}>
      <Searchbar SearchText={SearchText} setSearchText={setSearchText} />
      {Ingredients && Ingredients.length > 0 && (
        <Entrance>
          <View style={styles.list}>
            {Ingredients.map((item, i) => (
              <Ingredient
                active={SelectedIngredients.indexOf(item.idIngredient) !== -1}
                onSelect={() => selectIngredient(item.idIngredient)}
                item={item}
                key={i}
              />
            ))}
          </View>
        </Entrance>
      )}
      {SelectedIngredients.length > 0 && (
        <View style={styles.flyingButton}>
          <Button label="Continuar" action={handleSubmit} icon="rowing" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    color: "#00a0df",
    position: "relative",
   /*  height: "100%", */
    width: "100%",
    marginBottom: 150,
  },
  list: {
    marginTop: 50,
  },
  flyingButton: {
    bottom: -50,
    width: "100%",
    height: 30,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Fridge;
