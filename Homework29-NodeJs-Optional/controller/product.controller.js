import ProductService from "../service/product.service.js";

export default class ProductController {
  constructor() {
    this.productService = new ProductService();
  }

  async getAllProduct(req, res) {
    try {
      const filter = {};

      if (req.query.category) {
        filter.category = req.query.category;
      }

      if (req.query.name) {
        filter.name = req.query.name;
      }

      const products = await this.productService.getAll(filter);

      res.send(products);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async getProductById(req, res) {
    try {
      const product = await this.productService.getById(req.params.id);
      res.send(product);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const productBody = req.body;
      const product = await this.productService.create(productBody);
      res.status(201).send(product);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const productBody = req.body;
      const productId = req.params.id;
      const product = await this.productService.update(productId, productBody);
      res.send(product);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      const productId = req.params.id;
      await this.productService.delete(productId);
      res.status(200).send({ message: "Product deleted successfully" });
    } catch (error) {}
  }
}
