let myLibrary = [];

const author = document.getElementById("author");
let title = document.getElementById("title");
let pages = document.getElementById("pages");
let read = document.getElementById("read");

const addBookButton = document.getElementById("add-but");
const submitButton = document.getElementById("submit-book");
const closeButton = document.getElementById("close-book");
const hiddenModal = document.getElementById("hidden");
const bookHolder = document.getElementById("book-holder");
const exampleBookCard = document.querySelector(".book-card-title");
let bookCards = document.querySelector(".book-card");
const deleteBookButton = document.getElementById("delete");
const newReadButton = document.getElementById("book-read");

addBookButton.addEventListener("click", function openModal() {
  if (hiddenModal.className === "hidden") {
    hiddenModal.className = "visable";
    author.innerText = " ";
  }
  addBookButton.className = "hidden";
  bookHolder.className = "hidden";
});

closeButton.addEventListener("click", function closeModal() {
  hiddenModal.className = "hidden";
  addBookButton.className = "add-but";
  bookHolder.className = "book-holder";
  submitButton.innerText = "Submit";
  submitButton.style.backgroundColor = "#064420";
});

submitButton.addEventListener("click", function () {
  createNewBook();
});
let itemNumber = -1;

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function createNewBook() {
  if (author.value === "" || title.value === "" || pages.value <= 0) {
    submitButton.innerText = "Please complete all fields and submit";
    submitButton.style.backgroundColor = "crimson";
  } else {
    itemNumber++;

    let createdBook = new Book(author.value, title.value, pages.value);

    console.log(createdBook);
    console.log(myLibrary);

    hiddenModal.className = "hidden";
    addBookButton.className = "add-but";
    bookHolder.className = "book-holder";

    myLibrary.push(createdBook);
    let newListItem = document.createElement("li");
    newListItem.className = "book-card";
    // Adds Data-Attribute
    newListItem.dataset.index = itemNumber;
    exampleBookCard.insertAdjacentElement("afterend", newListItem);

    let newDivTitle = document.createElement("div");
    newListItem.insertAdjacentElement("beforeend", newDivTitle);
    newDivTitle.innerText = title.value;

    let newDivAuthor = document.createElement("div");
    newListItem.insertAdjacentElement("beforeend", newDivAuthor);
    newDivAuthor.innerText = author.value;

    let newDivPages = document.createElement("div");
    newListItem.insertAdjacentElement("beforeend", newDivPages);
    newDivPages.innerText = pages.value;

    let newReadButton = document.createElement("button");
    newReadButton.className = "book-read";
    newReadButton.id = "book-read";
    newReadButton.innerText = "Read";
    newListItem.insertAdjacentElement("beforeend", newReadButton);

    let newDeleteButton = document.createElement("button");
    newDeleteButton.className = "delete";
    newDeleteButton.id = "delete";
    newDeleteButton.innerText = "Delete";
    newListItem.insertAdjacentElement("beforeend", newDeleteButton);

    //
    let dataAttribute = newListItem.getAttribute("data-index");
    newDeleteButton.addEventListener("click", function () {
      newListItem.remove();
      myLibrary.splice(dataAttribute, 1);
      console.log(myLibrary);
      console.log(this);
      itemNumber--;
    });

    newReadButton.addEventListener("click", function () {
      if (newReadButton.innerText === "Read") {
        newReadButton.innerText = "Unread";
        newReadButton.style.backgroundColor = "crimson";
      } else {
        newReadButton.innerText = "Read";
        newReadButton.style.backgroundColor = "lightseagreen";
      }
    });
    submitButton.innerText = "Submit";
    submitButton.style.backgroundColor = "#064420";
    console.log(myLibrary);
    clearFields();
  }
}
function clearFields() {
  author.value = "";
  title.value = "";
  pages.value = "";
}

// Displays test books
/*let testBooks = [
    new Book("The Man in the High Castle", "Philip K Dick", 248),
    new Book("Natives", "Akala", 339),
    new Book("Object-Oriented JavaScript", "Stoyan Stefanov", 337),
  ];

window.onload = function () {
  myLibrary.push(testBooks[0], testBooks[1], testBooks[2]);

  for (i = 0; i < myLibrary.length; i++) {
    itemNumber++;
    let newListItem = document.createElement("li");
    newListItem.className = "book-card";
    newListItem.dataset.index = itemNumber;
    exampleBookCard.insertAdjacentElement("afterend", newListItem);

    let newDivTitle = document.createElement("div");
    newListItem.insertAdjacentElement("beforeend", newDivTitle);
    newDivTitle.innerText = testBooks[i].title;

    let newDivAuthor = document.createElement("div");
    newListItem.insertAdjacentElement("beforeend", newDivAuthor);
    newDivAuthor.innerText = testBooks[i].author;

    let newDivPages = document.createElement("div");
    newListItem.insertAdjacentElement("beforeend", newDivPages);
    newDivPages.innerText = testBooks[i].pages;

    let newReadButton = document.createElement("button");
    newReadButton.className = "book-read";
    newReadButton.id = "book-read";
    newReadButton.innerText = "Read";
    newListItem.insertAdjacentElement("beforeend", newReadButton);
    //
    newDeleteButton = document.createElement("button");
    newDeleteButton.className = "delete";
    newDeleteButton.id = "delete";
    newDeleteButton.innerText = "Delete";
    newListItem.insertAdjacentElement("beforeend", newDeleteButton);
    let dataAttribute = newListItem.getAttribute("data-index");
    ////////////////////////////11 Aug

    newDeleteButton.addEventListener("click", function () {
      newListItem.remove();
      myLibrary.splice(dataAttribute, 1);
      console.log(myLibrary);
      console.log(dataAttribute);
      itemNumber--;
    });

    newReadButton.addEventListener("click", function () {
      if (newReadButton.innerText === "Read") {
        newReadButton.innerText = "Unread";
        newReadButton.style.backgroundColor = "crimson";
      } else {
        newReadButton.innerText = "Read";
        newReadButton.style.backgroundColor = "lightseagreen";
      }
    });
  }
  console.log(myLibrary);
};
*/
