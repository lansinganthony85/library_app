const myLibrary = [];

const container = document.getElementById("conainter");

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

myLibrary.push(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1000, "Fantasy", true));
myLibrary.push(new Book("The Name of the Wind", "Patrick Rothfuss", 1000, "Fantasy", true));
myLibrary.push(new Book("A Wise Man's Fear", "Patrick Rothfuss", 1000, "Fantasy", false));

function displayLibrary() {
    for (let book in myLibrary) {
        let temp = document.createElement("div");
        temp.setAttribute("class", "book");
        let p = document.createElement("p").setAttribute("class", "title");
        let text = document.createTextNode(myLibrary[book].getTitle());
        p.appendChild(text);
        temp.appendChild(p);
        temp.appendChild(document.createElement("p").setAttribute("class", "author").appendChild(document.createTextNode(myLibrary[book].getAuthor())));
        temp.appendChild(document.createElement("p").setAttribute("class", "pages").appendChild(document.createTextNode(myLibrary[book].getPages())));
        temp.appendChild(document.createElement("p").setAttribute("class", "genre").appendChild(document.createTextNode(myLibrary[book].getGenre())));

        if(book.getStatus()) {
            temp.setAttribute("style", "background-color: blue");
        }
        else {
            temp.setAttribute("style", "background-color: red");
        }

        container.appendChild(temp);
    }
}

displayLibrary();