import { Router } from "express";
import RecipeController from "../controllers/recipe.controller.js";

const router = Router();
const recipeController = new RecipeController();

router.get("/", (req, res) => recipeController.getAllRecipes(req, res));
router.get("/:id", (req, res) => recipeController.getRecipeById(req, res));
router.post("/", (req, res) => recipeController.createRecipe(req, res));
router.put("/:id", (req, res) => recipeController.updateRecipe(req, res));
router.delete("/:id", (req, res) => recipeController.deleteRecipe(req, res));

router.get("/category/:category", (req, res) =>
  recipeController.getByCategory(req, res)
);

export default router;
