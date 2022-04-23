"use strict";

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const readStatusSelected = document.getElementById("read-status-selected");
const submitBtn = document.getElementById("submit");
const deleteCardBtn = document.getElementsByClassName("delete-btn");
const displayBooks = document.querySelector(".books-cards-section");

let myLibrary = [];
class Library {
  constructor() {
    this.title = bookTitle.value;
    this.author = bookAuthor.value;
    this.pages = bookPages.value;
    this.read = readStatusSelected.value;
  }

  addBookToLibrary() {
    myLibrary.push(this);
  }

  displayBooksInfo() {
    // do stuff here
    let booksInfos = "";
    for (let i = 0; i < myLibrary.length; i++) {
      booksInfos += `
      <div class="book-card">
        <div class="book-card-header">
          <h2 class="heading-secondary book-card-title">${myLibrary[i].title}</h2>
          <h3 class="heading-tertiary book-card-author">${myLibrary[i].author}</h3>
        </div>
        <img src="img/books-img.jpg" alt="" />
        <div class="book-card-status">
          <p class="pages-number">Pages : <b>${myLibrary[i].pages}</b></p>
          <p class="read-status-el">Read Status : <b>${myLibrary[i].read}</b></p>
        </div>
        <button id="delete" class="delete-btn" type="button">Delete</button>
      </div>`;

      displayBooks.innerHTML = booksInfos;
    }

    // if (bookTitle.value && bookAuthor.value && bookPages.value) {
    //   submitBtn.disabled = false;
    //   displayBooks.innerHTML = booksInfos;
    // } else {
    //   submitBtn.disabled = true;
    // }

    // delete book
    for (let i = 0; i < deleteCardBtn.length; i++) {
      deleteCardBtn[i].addEventListener("click", function () {
        displayBooks.removeChild(this.parentElement);
      });
    }

    // clear inputs
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    readStatusSelected.value = "";

    // Submit book to library and display it  in the library section
    submitBtn.addEventListener("click", function () {
      let newBook = new Library();
      newBook.addBookToLibrary();
      newBook.displayBooksInfo();
    });
  }
}

// Run the library class and display books info on the page when the page is loaded or refreshed (onload) or when the user clicks on the submit button (onclick)
window.onload = function () {
  let newBook = new Library();
  newBook.displayBooksInfo();
};
