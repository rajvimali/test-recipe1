// controllers/recipeController.js
const Recipe = require("../models/recipeModel");

exports.createRecipe = async (req, res) => {
  const { title, ingredients, instructions, cuisineType } = req.body;

  try {
    const recipe = new Recipe({
      title,
      ingredients,
      instructions,
      cuisineType,
      author: req.user.id,
    });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("author", "username");
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate(
      "author",
      "username"
    );
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateRecipe = async (req, res) => {
  const { title, ingredients, instructions, cuisineType } = req.body;

  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      {
        title,
        ingredients,
        instructions,
        cuisineType,
      },
      { new: true }
    );

    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
