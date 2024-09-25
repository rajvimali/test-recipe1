// routes/recipeRoutes.js
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipecontroller");

const router = express.Router();

router.post("/", authMiddleware, createRecipe);
router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.put("/:id", authMiddleware, updateRecipe);
router.delete("/:id", authMiddleware, deleteRecipe);

module.exports = router;
