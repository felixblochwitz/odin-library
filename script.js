const myLibrary = [null, null];
const bookDivs = [];
const bookshelf = document.querySelector(".bookshelf");
const bookDetails = document.getElementById("book-details");
const bookDetailsForm = document.querySelector("#book-details form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readStatus = document.getElementById("readStatus");
const addBookBtn = document.getElementById("add-book-btn");
const addBook = document.getElementById("add-book");
const addBookForm = document.querySelector("#add-book form");

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.toggleReadStatus = function () {
  this.readStatus = this.readStatus ? false : true;
};

function addBookToLibrary(title, author, pages, readStatus, lib) {
  lib.push(new Book(title, author, pages, readStatus));
}

function createBookDiv(book, index) {
  const bookDiv = document.createElement("div");
  const btnDiv = document.createElement("div");
  const removeBtn = document.createElement("button");
  const toggleReadStatusBtn = document.createElement("button");
  bookDiv.className = "book";
  bookDiv.textContent = book.title;
  bookDiv.dataset.index = index;
  btnDiv.className = "book-div-btns";
  toggleReadStatusBtn.textContent = "Read";
  removeBtn.textContent = "Remove";
  btnDiv.appendChild(toggleReadStatusBtn);
  btnDiv.appendChild(removeBtn);
  bookDiv.appendChild(btnDiv);
  toggleReadStatusBtn.addEventListener("click", () => {
    myLibrary[index].toggleReadStatus();
  });
  removeBtn.addEventListener("click", (target) => {
    remmoveBook(bookDiv, bookDiv.dataset.index);
  });
  return bookDiv;
}

function addBookDivListener(bookDiv, book) {
  bookDiv.addEventListener("click", (target) => {
    if (target.target.nodeName != "BUTTON") {
      title.textContent = `Title: ${book.title}`;
      author.textContent = `Author: ${book.author}`;
      pages.textContent = `Pages: ${book.pages}`;
      readStatus.textContent = `Already read: ${book.readStatus ? "\u2705" : "\u274c"}`;
      bookDetails.showModal();
    }
  });
}

function showBooksOnPage(lib) {
  lib.forEach((book, index) => {
    if (book != null) {
      const bookDiv = createBookDiv(book, index);
      addBookDivListener(bookDiv, book);
      bookshelf.appendChild(bookDiv);
    }
  });
}

function showNewBookOnPage(lib) {
  const bookDiv = createBookDiv(
    lib.slice(-1)[0],
    lib.indexOf(lib.slice(-1)[0]),
  );
  addBookDivListener(bookDiv, lib.slice(-1)[0]);
  bookshelf.appendChild(bookDiv);
}

function remmoveBook(bookDiv, index) {
  removeBookFromLib(index);
  removeBookFromPage(bookDiv);
  console.log(myLibrary);
}

function removeBookFromLib(index) {
  myLibrary[index] = null;
}

function removeBookFromPage(bookDiv) {
  bookshelf.removeChild(bookDiv);
}

addBookToLibrary("The Blade itself", "Joe Abercrombie", 536, true, myLibrary);

addBookToLibrary(
  "Before They Are Hanged",
  "Joe Abercrombie",
  570,
  true,
  myLibrary,
);

addBookToLibrary(
  "Last Argument of Kings",
  "Joe Abercrombie",
  660,
  false,
  myLibrary,
);

showBooksOnPage(myLibrary);

bookDetailsForm.addEventListener("submit", (target) => {
  target.preventDefault();
  bookDetails.close();
});

addBookBtn.addEventListener("click", () => {
  addBook.showModal();
});

addBookForm.addEventListener("submit", (target) => {
  target.preventDefault();
  const formData = new FormData(addBookForm);
  addBook.close();
  addBookToLibrary(
    formData.get("title"),
    formData.get("author"),
    formData.get("pages"),
    formData.get("readStatus") ? true : false,
    myLibrary,
  );
  showNewBookOnPage(myLibrary);
});
