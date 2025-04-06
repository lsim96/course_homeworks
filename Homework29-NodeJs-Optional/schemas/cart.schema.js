import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  products: {
    type: [Schema.Types.ObjectId],
  },
});

const Cart = model("cart", cartSchema, "carts");

export default Cart;
