import express from "express";
import bodyParser from "body-parser";
import path from "path";

// configuration
import "./config/config.js";

// routes
import { NODE_ENV, PORT } from "./constants/env.js";
import { bookRouter } from "./resources/books/books.route.js";

// create app instance and get port
const app = express();

// configure app
app.use(bodyParser.json());

// map the app routes
app.use("/api/books", bookRouter);

app.get("/page/home", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "pages", "home.html"));
});
app.get("/page/form", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "pages", "form.html"));
});

app.use((req, res) => {
  res.status(404).json({ message: "404 not found", data: null });
});

const server = app.listen(PORT, () => {
  console.log(`app is up and running in the ${NODE_ENV} mode on port ${PORT}`);
});

export { server };
