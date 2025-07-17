import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV || "development";
const MONGODB_URI = process.env.MONGODB_URI as string;
const DB_NAME = process.env.DB_NAME || "books";
export { PORT, NODE_ENV, MONGODB_URI, DB_NAME };
