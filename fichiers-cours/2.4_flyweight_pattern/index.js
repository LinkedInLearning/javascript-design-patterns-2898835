var Book = function (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
};

class Library {
  constructor() {
    this.books = new Map(); // cache
    this.bookList = {};
    this.count = 0;
  }

  addBook = function (title, author, isbn) {
    this.bookList[isbn] = {
      ...this.createBook(title, author, isbn)
    }
  };

  createBook = function (title, author, isbn) {
    const existingBook = this.books.has(isbn)
    if (existingBook) {
      console.log("get existing book # :" + this.books.get(isbn).isbn)
      return this.books.get(isbn)
    }
    const book = new Book(title, author, isbn)
    this.books.set(isbn, book);
    this.count++;
    console.log("creating new book # :" + this.books.get(isbn).isbn)
    console.log("# books created : " + this.count)
    return book;
  }
   
}
const library = new Library();

library.addBook("Harry Potter", "JK Rowling", "AB123");
library.addBook("Harry Potter", "JK Rowling", "AB123");
library.addBook("Harry Potter and the Curse", "JK Rowling", "AB345");
