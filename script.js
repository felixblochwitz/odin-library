const myLibrary = [];

console.log(myLibrary);

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
  "Before They Are Hanged",
  "Joe Abercrombie",
  "Orion",
  570,
  "English",
  true,
  myLibrary,
);

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
  "Last Argument of Kings",
  "Joe Abercrombie",
  "Orion",
  660,
  "English",
  false,
  myLibrary,
);

//console.log(myLibrary);

function showBooksOnPage(lib) {
  const bookshelf = document.querySelector(".bookshelf");
  console.log(bookshelf);
  lib.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";
    bookDiv.textContent = book.title
    bookshelf.appendChild(bookDiv)
  });
}

showBooksOnPage(myLibrary);
