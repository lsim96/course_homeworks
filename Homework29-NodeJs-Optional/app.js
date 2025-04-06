import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
