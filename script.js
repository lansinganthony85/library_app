const myLibrary = [];

const container = document.getElementById("container");

const showButton = document.getElementById("add-book");
const add_form = document.getElementById("add-book-form");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const mainForm = document.querySelector("#main-form");

const inputTitle = document.querySelector("#input-title");
const inputAuthor = document.querySelector("#input-author");
const inputPages = document.querySelector("#input-pages");
const inputGenre = document.querySelector("#input-genre");
const inputStatus = document.getElementsByName("status");

function Book(title, author, pages, genre, wasRead) {
    // the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.wasRead = wasRead;
}

Book.prototype.getTitle = function() {
    return this.title;
}

Book.prototype.getAuthor = function() {
    return this.author;
}

Book.prototype.getPages = function() {
    return this.pages;
}

Book.prototype.getGenre = function() {
    return this.genre;
}

Book.prototype.getStatus = function() {
    return this.wasRead;
}

function addBookToLibrary() {

}

function displayLibrary() {

    container.innerHTML = "";

    for (let book in myLibrary) {
        let temp = document.createElement("div");
        temp.setAttribute("class", "book");
        temp.appendChild(makeParagraph("title", myLibrary[book].getTitle()));
        temp.appendChild(makeParagraph("author", myLibrary[book].getAuthor()));
        temp.appendChild(makeParagraph("pages", `${myLibrary[book].getPages()} pages`));
        temp.appendChild(makeParagraph("genre", myLibrary[book].getGenre()));

        if(myLibrary[book].getStatus()) {
            temp.setAttribute("style", "background-color: lightblue");
        }
        else {
            temp.setAttribute("style", "background-color: coral");
        }

        container.appendChild(temp);
    }
}

function makeParagraph(identifier, text) {
    let p = document.createElement("p");
    p.setAttribute("class", identifier);
    p.appendChild(document.createTextNode(text));
    return p;
}

showButton.addEventListener("click", () => {
    add_form.showModal();
});

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    add_form.close();
});

confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = true;

    if(inputTitle.value ==+ "" || inputAuthor.value === "" || inputGenre.value === "")
        isValid = false;

    if(inputPages.value === "" || isNaN(inputPages.value))
        isValid = false;

    if(isValid) {
        let title = inputTitle.value;
        let author = inputAuthor.value;
        let pages = inputPages.value;
        let genre = inputGenre.value;
        let status = (inputStatus[0].checked) ? true : false;
        myLibrary.push(new Book(title, author, pages, genre, status));

        displayLibrary();
    }
});