import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (process.env.NODE_ENV === "testing") {
  Object.assign(process.env, {
    PORT: 5000,
    DB_NAME: "books-test",
    MONGODB_URI:
      "mongodb://user:password@localhost:27017/books-test?authSource=admin",
  });
}
const { MONGODB_URI, DB_NAME } = process.env;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}
// database connection
mongoose
  .connect(MONGODB_URI as string, {
    authSource: "admin",
  })
  .then(() => console.log(`connected successfully to DB: ${DB_NAME}`))
  .catch((error) => console.log(`failed to connect to DB: ${error}`));
