// src/api/api.js
import axios from "axios";

const API_URL = "http://localhost:5500/api"; // Ensure this URL matches your backend

export const getAllRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
