import express from "express";
import bodyParser from "body-parser";

// configuration
import "./config/config.js";

// routes
import { NODE_ENV, PORT } from "./constants/env.js";
import { bookRouter } from "./resources/books/books.router.js";

// create app instance and get port
const app = express();

// configure app
app.use(bodyParser.json());

// map the app routes
app.use("/api/books", bookRouter);

// bind app to the PORT
app.listen(PORT, () => {
  console.log(`app is up and running in the ${NODE_ENV} mode on port ${PORT}`);
});
