import mongoose from "mongoose";
import dotenv from "dotenv";

//Load enviorment variables
dotenv.config();
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DATABASE } =
  process.env;

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`;

export async function connectDB() {
  try {
    const connection = await mongoose.connect(MONGO_URI, {});
    console.log(`MongoDb connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDb connection error:", error);
    process.exit();
  }
}
