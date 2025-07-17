import express from "express";
import bodyParser from "body-parser";

// configuration
import "./config/config.js";

// routes
import { NODE_ENV, PORT } from "./constants/env.js";
import { bookRouter } from "./resources/books/books.route.js";

// create app instance and get port
export const app = express();

// configure app
app.use(bodyParser.json());

// map the app routes
app.use("/api/books", bookRouter);

app.use((req, res) => {
  res.status(404).json({ message: "404 not found", data: null });
});

// bind app to the PORT
app.listen(PORT, () => {
  console.log(`app is up and running in the ${NODE_ENV} mode on port ${PORT}`);
});
