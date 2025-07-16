import {
  getBooks as getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "./books.service.js";

import { Request, Response } from "express";

// ✅ Get all books
const getBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books = await getAllBooks();
    res.json({
      message: "books retrieved successfully",
      data: { books },
    });
  } catch (error) {
    res.status(500).json({ message: "failed to get books" });
  }
};

// ✅ Get single book
const getOneBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const bookId = req.params.id;
    const book = await getBook(bookId);

    if (!book) {
      res.status(404).json({ message: "404 not found" });
      return;
    }

    res.json({
      message: "book retrieved successfully",
      data: { book },
    });
  } catch (error) {
    res.status(500).json({ message: "failed to get book" });
  }
};

// ✅ Create book
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
      message: "book created successfully",
      data: { book },
    });
  } catch (error) {
    res.status(500).json({ message: "failed to create book" });
  }
};

// ✅ Update book
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
      message: "book updated successfully",
      data: { book: updated },
    });
  } catch (error) {
    res.status(500).json({ message: "failed to update book" });
  }
};

// ✅ Delete book
const deleteOneBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const bookId = req.params.id;
    const book = await getBook(bookId);

    if (!book) {
      res.status(404).json({ message: "404 not found" });
      return;
    }

    await deleteBook(book);

    res.json({ message: "book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed to delete book" });
  }
};

export { getBooks, getOneBook, createOneBook, updateOneBook, deleteOneBook };
