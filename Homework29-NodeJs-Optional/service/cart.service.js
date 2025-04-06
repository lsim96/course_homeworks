import Cart from "../schemas/cart.schema.js";

export default class CartService {
  async getAllCarts() {
    const data = await Cart.find();
    return data;
  }

  async getCartById(id) {
    const cart = await Cart.findById(id);
    return cart;
  }

  async addProduct(cartId, productId) {
    const cart = await this.getCartById(cartId);

    if (!cart) {
      throw new Error("Cart does not exist!");
    }

    cart.products.push(productId);
    cart.save();
    console.log(cart.products);

    return cart;
  }

  async removeProduct(cartId, productId) {
    const cart = await this.getCartById(cartId);

    if (!cart) {
      throw new Error("Cart does not exist!");
    }

    cart.products.pull(productId);
    cart.save();

    return cart;
  }
}
