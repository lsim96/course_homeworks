import { Router } from "express";
import CartController from "../controller/cart.controller.js";

const cartRouter = Router();
const cartController = new CartController();

cartRouter.get("/", (req, res) => cartController.getAllCarts(req, res));

cartRouter.get("/:id", (req, res) => cartController.getCartById(req, res));

cartRouter.put("/:cartId", (req, res) =>
  cartController.addProductToCart(req, res)
);

cartRouter.post("/", (req, res) => cartController.createCart(req, res));

export default cartRouter;
