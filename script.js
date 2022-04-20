"use strict";

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const readStatus = document.getElementById("read");
const submitBtn = document.getElementById("submit");
const deleteBtn = document.getElementsByClassName("delete-btn");
const displayBooks = document.querySelector(".books-cards-section");

let myLibrary = [];

function Book() {
  // the constructor...
  this.title = bookTitle.value;
  this.author = bookAuthor.value;
  this.pages = bookPages.value;
  this.read = readStatus.value;
}

function addBookToLibrary() {
  // do stuff here
  let book = new Book();
  myLibrary.push(book);
  displayBooksInfo();
}

function displayBooksInfo() {
  // do stuff here
  let booksInfos = "";
  for (let i = 0; i < myLibrary.length; i++) {
    booksInfos += `
    <div class="book-card">
      <div class="book-card-header">
        <h2 class="heading-secondary book-card-title">${myLibrary[i].title}</h2>
        <h3 class="heading-teritary book-card-author">${myLibrary[i].author}</h3>
      </div>
      <img src="img/books-img.jpg" alt="" />
      <div class="book-card-status">
        <p class="pages-number">Pages : <b>${myLibrary[i].pages}</b></p>
        <p class="read-status-el">Read Status : <b>${myLibrary[i].read}</b></p>
      </div>
      <button class="delete-btn" type="button">Delete</button>
    </div>`;
  }

  displayBooks.innerHTML = booksInfos;

  // if (bookTitle.value && bookAuthor.value && bookPages.value) {
  //   submitBtn.disabled = false;
  //   displayBooks.innerHTML = booksInfos;
  // } else {
  //   submitBtn.disabled = true;
  // }
}

submitBtn.addEventListener("click", addBookToLibrary);
