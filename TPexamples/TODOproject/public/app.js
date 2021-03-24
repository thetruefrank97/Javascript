"use strict";
var _a, _b;
// book constructor
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    set setTitle(title) {
        this.title = title;
    }
    get getTitle() {
        return this.title;
    }
    set setAuthor(author) {
        this.author = author;
    }
    get getAuthor() {
        return this.author;
    }
    set setISBN(isbn) {
        this.isbn = isbn;
    }
    get getISBN() {
        return this.isbn;
    }
}
//UI constructor
class UI {
    addBookToList(book) {
        let ref = book;
        const list = document.getElementById("book-list");
        //Create tr element
        const row = document.createElement("tr");
        //Insert cols
        row.innerHTML = `
            <td>${ref.getTitle}</td>
            <td>${ref.getAuthor}</td>
            <td>${ref.getISBN}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        list === null || list === void 0 ? void 0 : list.appendChild(row);
    }
    clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    }
    showAlert(message, className) {
        const div = document.createElement("div");
        //add classes
        div.className = `alert ${className}`;
        //add text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector(".container");
        // get form
        const form = document.querySelector("#book-form");
        //Insert alert
        container === null || container === void 0 ? void 0 : container.insertBefore(div, form);
        //timeout after 3 sec
        setTimeout(function () {
            var _a;
            (_a = document.querySelector(".alert")) === null || _a === void 0 ? void 0 : _a.remove();
        }, 3000);
    }
    //delete book
    deleteBook(target) {
        if (target.className === "delete") {
            target.parentElement.parentElement.remove();
        }
    }
}
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem("books") === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        console.log(books);
        return books;
    }
    static displayBooks() {
        const books = Store.getBooks();
        const ui = new UI();
        books.forEach((book) => {
            ui.addBookToList(book);
        });
    }
    static addBook(book) {
        let books = Store.getBooks();
        books.push(book);
        const booksArray = JSON.stringify(books);
        localStorage.setItem("books", booksArray);
    }
    static removeBook(ISBN) {
        console.log(ISBN);
    }
}
//DOM load event
document.addEventListener("DOMContentLoaded", Store.displayBooks);
(_a = document.getElementById("book-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = parseInt(document.getElementById("isbn").value);
    const book = new Book(title, author, isbn);
    //Instantiate UI
    const ui = new UI();
    //validate
    if (title === "" || author === "" || isNaN(isbn)) {
        //error alert
        console.log("error");
        ui.showAlert("Please fill all the fields", "error");
        console.log("aaaa");
    }
    else {
        //add book to list
        ui.addBookToList(book);
        //add to LS
        Store.addBook(book);
        ui.showAlert("Book added!", "success");
        //clear fields
        ui.clearFields();
    }
    event.preventDefault();
});
//Event listner for delete
(_b = document.getElementById("book-list")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (event) {
    event.preventDefault();
    const ui = new UI();
    ui.deleteBook(event.target);
    //show message
    ui.showAlert("Book Removed!", "success");
    //Remove from local storage
    Store.removeBook(event.target.parentElement.previousElementSibling.textContent);
});
