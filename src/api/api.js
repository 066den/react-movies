import { API_URL_MEAL } from "../config";

const getMealById = async (mealId) => {
  const response = await fetch(API_URL_MEAL + "lookup.php?i=" + mealId);
  return await response.json();
};

const getAllCategories = async () => {
  const response = await fetch(API_URL_MEAL + "categories.php");
  return await response.json();
};

const getFilteredCategory = async (catName) => {
  const response = await fetch(API_URL_MEAL + "filter.php?c=" + catName);
  return await response.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
