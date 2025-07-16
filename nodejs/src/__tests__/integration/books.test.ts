import "../../config/config";

import * as booksService from "../../resources/books/books.service";

describe("Books Service", () => {
  describe("getAllBooks", () => {
    it("should return an array of books", async () => {
      const books = await booksService.getBooks();
      expect(Array.isArray(books)).toBe(true);
      expect(books.length).toBe(0);
    });
  });
});
