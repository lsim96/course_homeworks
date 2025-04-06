import { Schema, model } from "mongoose";
import { category } from "../util/constants.js";
//name,description,price,quantity,reviews,category

const productSchema = new Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: [true, "Name of the products is required"],
  },
  description: {
    type: String,
    minLength: 15,
    maxLength: 250,
    required: [true, "Description of the product is required"],
  },
  price: {
    type: Number,
    min: 1,
    max: 350,
    required: [true, "Price of the product is required"],
  },
  quantity: {
    type: Number,
    min: 1,
    max: 100,
    required: [true, "Quantity is required"],
  },
  reviews: {
    type: Number,
    min: 0,
    max: 10,
  },
  category: {
    type: String,
    minLength: 2,
    maxLength: 15,
    enum: category,
    required: [true, "Category is required"],
  },
});

const Product = model("product", productSchema, "products");

export default Product;
