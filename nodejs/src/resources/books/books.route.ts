import express from "express";
import {
  createOneBook,
  deleteOneBook,
  getBooks,
  getOneBook,
  updateOneBook,
} from "./books.controller";

const router = express.Router();

router.route("/").get(getBooks).post(createOneBook);

router.route("/:id").get(getOneBook).put(updateOneBook).delete(deleteOneBook);

export { router as bookRouter };
