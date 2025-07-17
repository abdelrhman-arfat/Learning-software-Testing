import "../../config/config";

import * as booksService from "../../resources/books/books.service";
import { Book } from "../../resources/books/books.model";

describe("Books Service", () => {
  describe("getAllBooks", () => {
    it("should return an array of books", async () => {
      const books = await booksService.getBooks();
      expect(Array.isArray(books)).toBe(true);
      expect(books.length).toBeGreaterThanOrEqual(0);
    });
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

    // cleanup the database
    await Book.deleteMany({
      title: { $in: arrayOfBook.map((book) => book.title) },
    });
  });
});
