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

  addBook = function (title, author, isbn) {};

  createBook = function (title, author, isbn) {};
}
const library = new Library();

library.addBook("Harry Potter", "JK Rowling", "AB123");
library.addBook("Harry Potter", "JK Rowling", "AB123");
library.addBook("Harry Potter and the Curse", "JK Rowling", "AB345");
