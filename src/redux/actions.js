import realGetIngredients from "./saga";

let ingredients = false;

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

export default getIngredients;
