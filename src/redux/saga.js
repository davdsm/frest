import ingredients from "../../assets/api/ingredients.json";

export const realGetIngredients = async (callback) => {
  callback(ingredients.meals);
};

export default realGetIngredients;
