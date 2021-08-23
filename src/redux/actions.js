import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  realGetIngredients,
  realGetCategories,
  realGetRandomMeal,
} from "./saga";

let ingredients = false;
let categories = false;

export const getUserName = async () => {
  const user = await AsyncStorage.getItem("user_name");
  if (user !== null) {
    return user;
  } else {
    return false;
  }
};

export const getFridge = async (callback) => {
  const fridge = await AsyncStorage.getItem("fridge");
  if (fridge !== null) {
    callback(JSON.parse(fridge));
  } else {
    callback(false);
  }
};

export const setFridge = async (ingredients) => {
  await AsyncStorage.setItem("fridge", JSON.stringify(ingredients));
  return true;
};

export const getIngredients = (callback) => {
  if (!ingredients) {
    realGetIngredients((v) => {
      ingredients = v;
      callback(v);
    });
  } else {
    callback(ingredients);
  }
};

export const getCategories = (callback) => {
  if (!categories) {
    realGetCategories((v) => {
      categories = v;
      callback(v);
    });
  } else {
    callback(categories);
  }
};

export const getRandomMeal = (fridge, callback) => {
  realGetRandomMeal(callback);
};

export default getIngredients;
