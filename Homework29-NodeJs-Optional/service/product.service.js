import Product from "../schemas/product.schema.js";
import "../schemas/product.schema.js";

export default class ProductService {
  async getAll(filter = {}) {
    const data = await Product.find(filter).collation({
      locale: "en",
      strength: 2,
    });
    return data;
  }

  async getById(id) {
    const product = await Product.findById(id);
    return product;
  }

  async create(body) {
    return Product.create(body);
  }

  async update(id, body) {
    let product = await Product.findById(id);
    const updateProduct = { ...product, ...body };
    product.set(updateProduct);
    await product.save();
    return product;
  }

  async delete(id) {
    return Product.findByIdAndDelete(id);
  }
}
