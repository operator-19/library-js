# library-js

Demo: https://operator-19.github.io/library-js/

Book Library
- library-js is a simple web application that allows you to keep track of your book collection. With this app, you can add, edit, and remove books, and see a list of all the books in your library. The app is built using HTML, CSS, and JavaScript, and uses localStorage to persist the data between sessions.

Features
- Add books to your library by filling out a form with title, author, number of pages, and read status
- Edit existing books by clicking on them and updating their fields
- Remove books by clicking on a delete button next to them
- See a list of all the books in your library with their details
- Data is saved to localStorage so that you can close the app and come back to it later without losing your library



Usage
- To add a new book to the library, click on the Add New Book button and fill out the form.
- To view the list of books in the library, scroll down to the My Library section.
- The list of books can be filtered, sorted, and searched for by adding new functionality to the existing codebase.

Technologies Used
- HTML
- CSS
- JavaScript

Code Description
- The Book constructor function is defined, which accepts four parameters: title, author, pages, and readStatus. The Book function is used to create book objects.
- The loopThroughArray function loops through the myLibrary array and creates a new HTML element for each book object in the array. The book elements are appended to the booksContainer element.
- The program includes a form for users to add new books to the library. The form has input fields for title, author, pages, and readStatus. When the form is submitted, the input values are retrieved and a new book object is created using the Book constructor function. The new book object is added to the myLibrary array and the book list is updated by calling the loopThroughArray function again.
- The program also includes some dummy data, which is used to initialize the myLibrary array with some books.
