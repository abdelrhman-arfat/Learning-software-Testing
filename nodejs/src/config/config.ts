import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME, MONGODB_URI, NODE_ENV } from "../constants/env.js";

dotenv.config();

if (!MONGODB_URI) {
}

if (NODE_ENV === "testing") {
  Object.assign(process.env, {
    PORT: 5000,
    DB_NAME: "books-test",
    MONGODB_URI:
      "mongodb://user:password@localhost:27017/books-test?authSource=admin",
  });
}

// database connection
mongoose
  .connect(MONGODB_URI, {
    authSource: "admin",
  })
  .then(() => console.log(`connected successfully to DB: ${DB_NAME}`))
  .catch((error) => console.log(`failed to connect to DB: ${error}`));
