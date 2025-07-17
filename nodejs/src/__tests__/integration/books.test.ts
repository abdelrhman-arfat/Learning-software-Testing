import request from "supertest";
import mongoose from "mongoose";
import "../../config/config";
import * as booksService from "../../resources/books/books.service";
import { Book } from "../../resources/books/books.model";
import { server } from "../../index";

/**
 * @description helper functions after and before the test
 * 1- beforeEach() to do after each test
 * 2- beforeAll() to do before all tests
 * 3- afterAll() to do after all tests
 * 4- afterEach() to do after each test
 * @see https://jestjs.io/docs/setup-teardown
 */

// before each test :
beforeEach(async () => {
  await Book.deleteMany({});
});

afterAll(async () => {
  server.close();
  await Book.deleteMany({});
  await mongoose.disconnect();
});

describe("Books Service", () => {
  describe("getAllBooks", () => {
    it("should return an array of books", async () => {
      const books = await booksService.getBooks();
      expect(Array.isArray(books)).toBe(true);
      expect(books.length).toBeGreaterThanOrEqual(0);
    });
    it("should return a two book in  the database", async () => {
      // create fake two books
      const arrayOfBook = [{ title: "Book1" }, { title: "Book2" }];
      await Book.insertMany(arrayOfBook);

      // test if the books are returned
      const books = await booksService.getBooks();
      expect(books.length).toBe(2);
      expect(books[0].title).toBe("Book1");
      expect(books[1].title).toBe("Book2");
    });
  });

  describe("createBook", () => {
    it("create a book and return it", async () => {
      const book = {
        title: "New Book",
        price: 20,
        description: "This is a new book",
      };

      const createBook = await booksService.createBook(book);
      expect(createBook).toHaveProperty("_id");
      expect(createBook.title).toBe("New Book");
      expect(createBook.price).toBe(20);
      expect(createBook.description).toBe("This is a new book");
      const books = await booksService.getBooks();
      expect(books.length).toBe(1);
      expect(books[0].title).toBe("New Book");
      expect(books[0].price).toBe(20);
      expect(books[0].description).toBe("This is a new book");
    });
  });
  describe("API Book Test", () => {
    it("test the to get the BOOK", async () => {
      const res = await request(server).get("/api/books");
      expect(res.status).toBe(200);
    });
    it("test", async () => {
      const book = await Book.insertOne({ title: "Book_TEST" });
      const res = await request(server).get(`/api/books/${book._id}`);
      expect(res.status).toBe(200);
      const data = res.body.data.book;
      expect(data.title).toMatch(book.title);
      expect(data._id).toBeDefined();
    });
  });
});
