import { Router } from "express";
import ProductController from "../controller/product.controller.js";

const productRouter = Router();
const productController = new ProductController();

productRouter.get("/", (req, res) => productController.getAllProduct(req, res));

productRouter.get("/:id", (req, res) =>
  productController.getProductById(req, res)
);

productRouter.post("/", (req, res) =>
  productController.createProduct(req, res)
);

productRouter.put("/:id", (req, res) =>
  productController.updateProduct(req, res)
);

productRouter.delete("/:id", (req, res) =>
  productController.deleteProduct(req, res)
);

export default productRouter;
