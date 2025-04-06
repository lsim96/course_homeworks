// title (String, required)
// description (String, required)
// ingredients (Array of Strings, required)
// instructions (Array of Strings, required)
// cookingTime (Number, in minutes)
// difficulty (String: 'easy', 'medium', 'hard')
// isVegetarian (Boolean)
// category (String: 'breakfast', 'lunch', 'dinner', 'dessert')
import { Schema, model } from "mongoose";
import { ingredients, category, difficulty } from "../util/constants.js";

const recipeSchema = new Schema({
  title: {
    type: String,
    minLength: 5,
    maxLength: 30,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    minLength: 15,
    maxLength: 80,
    required: [true, "Description is required"],
  },
  ingredients: {
    type: [String],
    enum: ingredients,
    minLength: 2,
    maxLength: 10,
    required: [true, "Ingredients are required"],
  },
  instructions: {
    type: [String],
    minLength: 3,
    maxLength: 8,
    required: [true, "Istructions are required"],
  },
  cookingTime: {
    type: Number,
    min: 5,
    max: 680,
  },
  difficulty: {
    type: String,
    enum: difficulty,
  },
  isVegetarian: {
    type: Boolean,
  },
  category: {
    type: String,
    enum: category,
  },
});

const Recipe = model("recipe", recipeSchema, "recipes");

export default Recipe;
