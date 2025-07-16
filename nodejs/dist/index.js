"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// configuration
require("./config/config.js");
// routes
const env_js_1 = require("./constants/env.js");
const books_router_js_1 = require("./resources/books/books.router.js");
// create app instance and get port
const app = (0, express_1.default)();
// configure app
app.use(body_parser_1.default.json());
// map the app routes
app.use("/api/books", books_router_js_1.bookRouter);
app.use((req, res) => {
    res.status(404).json({ message: "404 not found", data: null });
});
// bind app to the PORT
app.listen(env_js_1.PORT, () => {
    console.log(`app is up and running in the ${env_js_1.NODE_ENV} mode on port ${env_js_1.PORT}`);
});
