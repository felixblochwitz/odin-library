const myLibrary = [];
const bookDivs = [];
const bookDetails = document.getElementById("book-details");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readStatus = document.getElementById("readStatus");

function Book(title, author, publisher, pages, language, readStatus) {
  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.pages = pages;
  this.language = language;
  this.readStatus = readStatus;
}

function addBookToLibrary(
  title,
  author,
  publisher,
  pages,
  language,
  readStatus,
  lib,
) {
  lib.push(new Book(title, author, publisher, pages, language, readStatus));
}

addBookToLibrary(
  "The Blade itself",
  "Joe Abercrombie",
  "Orion",
  536,
  "English",
  true,
  myLibrary,
);

addBookToLibrary(
  "Before They Are Hanged",
  "Joe Abercrombie",
  "Orion",
  570,
  "English",
  true,
  myLibrary,
);

addBookToLibrary(
  "Last Argument of Kings",
  "Joe Abercrombie",
  "Orion",
  660,
  "English",
  false,
  myLibrary,
);

function showBooksOnPage(lib) {
  const bookshelf = document.querySelector(".bookshelf");
  console.log(bookshelf);
  lib.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";
    bookDiv.textContent = book.title;
    bookshelf.appendChild(bookDiv);
    bookDivs.push(bookDiv);
  });
}

showBooksOnPage(myLibrary);

bookDivs.forEach((x, i) => {
  const book = myLibrary[i];
  x.addEventListener("click", () => {
    title.textContent = `Title: ${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    readStatus.textContent = `Already read: ${book.readStatus ? "\u2705" : "\u274c"}`;
    bookDetails.showModal();
  });
});
