import {
  getBooks as getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "./books.service.js";

import { Request, Response } from "express";

// Constants for messages
export const bookCreated = "book created successfully";
export const bookUpdated = "book updated successfully";
export const bookGet = (b: boolean = true) => {
  return `book${b ? "s" : ""} retrieved successfully`;
};
export const failedMatcher = /failed to .* books?/;
export const bookDeleted = "book deleted successfully";

const getBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books = await getAllBooks();
    res.json({
      message: bookGet(),
      data: { books },
    });
  } catch (error) {
    res.status(500).json({ message: "failed to get books" });
  }
};

const getOneBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const bookId = req.params.id;
    const book = await getBook(bookId);

    if (!book) {
      res.status(404).json({ message: "404 not found" });
      return;
    }

    res.json({
      message: bookGet(false),
      data: { book },
    });
  } catch (error) {
    res.status(500).json({ message: "failed to get book" });
  }
};

const createOneBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, price } = req.body;

    if (!title) {
      res
        .status(400)
        .json({ message: "400 invalid request, title is required" });
      return;
    }

    const book = await createBook({ title, description, price });

    res.status(201).json({
      message: bookCreated,
      data: { book },
    });
  } catch (error) {
    res.status(500).json({ message: "failed to create book" });
  }
};

const updateOneBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const bookId = req.params.id;
    const book = await getBook(bookId);

    if (!book) {
      res.status(404).json({ message: "404 not found" });
      return;
    }

    const { title, description, price } = req.body;

    const updated = await updateBook(book, { title, description, price });

    res.json({
      message: bookUpdated,
      data: { book: updated },
    });
  } catch (error) {
    res.status(500).json({ message: "failed to update book" });
  }
};

const deleteOneBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const bookId = req.params.id;
    const book = await getBook(bookId);

    if (!book) {
      res.status(404).json({ message: "404 not found" });
      return;
    }

    await deleteBook(book);

    res.json({ message: bookDeleted });
  } catch (error) {
    res.status(500).json({ message: "failed to delete book" });
  }
};

export { getBooks, getOneBook, createOneBook, updateOneBook, deleteOneBook };
