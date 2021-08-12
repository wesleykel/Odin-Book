const book1 = new Book("how to win", "james bond", 100, false);
const book2 = new Book("The  Bible", "james bond", 90, false);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
}

Book.prototype.bookRead = function () {
  if (this.read === true) {
    console.log("This  Book has  been read");
  } else {
    console.log("This  Book has  not  been read");
  }
};

Book.prototype.toogleBookRead = function () {
  this.read = true;
  console.log(this.title, "has  been read");
};

Book.prototype.toogleBookUnread = function () {
  this.read = false;
  console.log(this.title, "has  not been read");
};

Book.prototype.numberOfPages = function () {
  if (this.pages >= 100) {
    console.log(this.title, " is a large book");
  } else {
    console.log(this.title, " is a small book");
  }
};

//Prototypal Inheritance
//So far you have seen several ways of making an object inherit the prototype from another object. At this point in history, the recommended way of setting the prototype of an object is Object.create ( here is the documentation for that method.) Object.create very simply returns a new object with the specified prototype and any additional properties you want to add. For our purposes you use it like so:
// Created Animal constructer first, then mad  to prototypes animalSound and goodBoy, then created  Dog Object and  used  Object.Create() to copy the animal prototypes  to DoG!//
function Animal() {}

Animal.prototype.animalSound = function () {
  console.log(this.sound);
};
Animal.prototype.goodBoy = function () {
  if (this.gender === "Male") {
    console.log(this.name + " is wagging  his tail");
  } else {
    console.log(this.name + " is wagging  her tail");
  }
};

function Dog(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sound = "bark";
}
Dog.prototype = Object.create(Animal.prototype);

const alfie = new Dog("Alfie", "Male");
const fred = new Dog("Fred", "Female");


for (let index = 0; index < myLibrary.length; index++) {
    const element = myLibrary[index];
    console.log(element);

    let newListItem = document.createElement("li");
newListItem.className = "book-card";
exampleBookCard.insertAdjacentElement("afterend", newListItem);

let newDivTitle = document.createElement("div");
newListItem.insertAdjacentElement("beforeend", newDivTitle);
newDivTitle.innerText = createdBook.title;

let newDivAuthor = document.createElement("div");
newListItem.insertAdjacentElement("beforeend", newDivAuthor);
newDivAuthor.innerText = createdBook.author;

let newDivPages = document.createElement("div");
newListItem.insertAdjacentElement("beforeend", newDivPages);
newDivPages.innerText = createdBook.pages;

let newDivRead = document.createElement("div");
newListItem.insertAdjacentElement("beforeend", newDivRead);

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
