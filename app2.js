let myLibrary = [];

let author = document.querySelector("#author").value;
let title = document.getElementById("title").value;
let pages = document.getElementById("pages").value;
let read = document.getElementById("read").value;

const addBookButton = document.getElementById("add-but");
const submitButton = document.getElementById("submit-book");
const closeButton = document.getElementById("close-book");
const hiddenModal = document.getElementById("hidden");
const bookHolder = document.getElementById("book-holder");

addBookButton.addEventListener("click", function openModal() {
  if (hiddenModal.className === "hidden") {
    hiddenModal.className = "visable";
  }
  addBookButton.className = "hidden";
  bookHolder.className = "hidden";
});

closeButton.addEventListener("click", function closeModal() {
  hiddenModal.className = "hidden";
  addBookButton.className = "add-but";
  bookHolder.className = "book-holder";
});

submitButton.addEventListener("click", function () {
  alert("james");
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createDiv() {}
function addBookToLibrary() {}
