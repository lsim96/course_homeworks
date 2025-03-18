import express from "express";
import router from "./routes/trainers.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const filePathDirectory = path.dirname(currentFilePath);

const publicPath = path.join(filePathDirectory, "public");

app.use("/home", express.static(publicPath));
app.use("/home/image.jpg", express.static(publicPath));

app.use("/api/trainers", router);

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on port ${PORT}`);
});
