class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UIs {
  //   constructor() {}
  addBookToList(book) {
    const list = document.getElementById("book-list");
    //CREATE TR ELEMENT
    const row = document.createElement("tr");
    //INSERT COLS
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
  }

  showAlert(message, className) {
    //CREATE DIV
    const div = document.createElement("div");
    //ADD CLASS
    div.className = `alert ${className}`;
    //ADD TEXT
    div.appendChild(document.createTextNode(message));
    //GET PARENT
    const container = document.querySelector(".container");
    //GET FORM
    const form = document.querySelector("#book-form");
    //INSERT ALERT
    container.insertBefore(div, form);
    //SET TIMEOUT
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

class Store {
  static getBooks() {
    let books;
    // if (localStorage.getItem("books") === null) {
    //   books = [];
    // } else {
    books = JSON.parse(localStorage.getItem("books"));
    //
    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book) {
      const ui = new UIs();
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}

document.addEventListener("DOMContentLoaded", Store.displayBooks());

//EVENT LISTENER
document.getElementById("book-form").addEventListener("submit", function(e) {
  //GET FORM VALUES
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //INSTANTIATE BOOK
  const book = new Book(title, author, isbn);
  //INSTANTIATE UI
  const ui = new UIs();

  // VALIDATION
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    //ADD BOOK TO LIST
    ui.addBookToList(book);

    ui.clearFields();

    ui.showAlert("Book Added", "success");
    //ADD TO LS
    Store.addBook(book);
  }

  e.preventDefault();
});

//EVENT LISTENER FOR DELETE
document.getElementById("book-list").addEventListener("click", function(e) {
  //INSTANTIATE
  const ui = new UIs();
  //DELETE BOOK
  ui.deleteBook(e.target);

  //SHOW MESSAGE
  ui.showAlert("Book Removed", "success");
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  e.preventDefault();
});
