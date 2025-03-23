import Recipe from "../schemas/recipe.schema.js";
import "../schemas/recipe.schema.js";

export default class RecipeService {
  async getAll(filter = {}) {
    const data = Recipe.find(filter).collation({ locale: "en", strength: 2 });
    return data;
  }

  async getById(id) {
    const recipe = Recipe.findById(id);
    return recipe;
  }

  async create(body) {
    return Recipe.create(body);
  }

  async update(id, body) {
    let recipe = await Recipe.findById(id);
    const updateRecipe = { ...recipe, ...body };
    recipe.set(updateRecipe);
    await recipe.save();
    return recipe;
  }

  async delete(id) {
    return Recipe.findByIdAndDelete(id);
  }

  async find(query) {
    return Recipe.find(query);
  }
}
