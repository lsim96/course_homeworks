import RecipeService from "../models/recipe.model.js";

export default class RecipeController {
  constructor() {
    this.recipeService = new RecipeService();
  }

  async getAllRecipes(req, res) {
    try {
      const filter = {};

      if (req.query.isVegetarian) {
        filter.isVegetarian = req.query.isVegetarian;
      }
      if (req.query.difficulty) {
        filter.difficulty = req.query.difficulty;
      }
      if (req.query.category) {
        filter.category = req.query.category;
      }
      if (req.query.title) {
        filter.title = req.query.title;
      }

      const recipes = await this.recipeService.getAll(filter);
      res.send(recipes);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async getRecipeById(req, res) {
    try {
      const recipe = await this.recipeService.getById(req.params.id);
      if (!recipe) {
        res.status(404).send({ message: "Recipe not found" });
      }
      res.send(recipe);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async createRecipe(req, res) {
    try {
      const {
        title,
        description,
        ingredients,
        instructions,
        cookingTime,
        difficulty,
        isVegetarian,
        category,
      } = req.body;
      const recipeData = {
        title,
        description,
        ingredients,
        instructions,
        cookingTime,
        difficulty,
        isVegetarian,
        category,
        createdAtL: new Date(),
      };
      const id = await this.recipeService.create(recipeData);
      res.status(201).send({ id, ...recipeData });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async updateRecipe(req, res) {
    try {
      const recipeBody = req.body;
      const recipeId = req.params.id;
      const recipe = await this.recipeService.update(recipeId, recipeBody);
      res.send(recipe);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async deleteRecipe(req, res) {
    try {
      const success = await this.recipeService.delete(req.params.id);
      if (!success) {
        return res.status(404).send({ message: "Recipe was not found" });
      }
      res.send({ message: "Recipe was deleted successfully" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async getByCategory(req, res) {
    try {
      const { category } = req.params;
      const validCategories = ["dinner", "desert", "breakfast", "lunch"];

      if (!validCategories.includes(category)) {
        return res.status(400).send({ message: "Invalid category" });
      }

      const recipes = await this.recipeService.find({ category });

      if (recipes.length === 0) {
        return res
          .status(404)
          .send({ message: `No recipes found for ${category}` });
      }

      res.status(200).send(recipes);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}
