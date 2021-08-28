import ingredients from "../../assets/api/ingredients.json";
import categories from "../../assets/api/categories.json";

export const realGetIngredients = async (callback) => {
  callback(ingredients.meals);
};

export const realGetCategories = async (callback) => {
  callback(categories.categories);
};

export const realGetRandomMeal = async (callback) => {
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => callback(json))
    .catch((error) => {
      console.error(error);
    });
};

export const realGetMeal = async (mealId, callback) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => callback(json.meals[0]))
    .catch((error) => {
      console.error(error);
    });
};

export default realGetIngredients;
