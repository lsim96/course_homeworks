import CartService from "../service/cart.service.js";

export default class CartController {
  constructor() {
    this.cartService = new CartService();
  }

  async getAllCarts(req, res) {
    try {
      const carts = await this.cartService.getAllCarts();
      res.send(carts);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async getCartById(req, res) {
    try {
      const cart = await this.cartService.getCartById(req.params.id);
      res.send(cart);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async addProductToCart(req, res) {
    try {
      const cart = await this.cartService.addProduct(
        req.params.cartId,
        req.body.productId
      );
      res.send(cart);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}
