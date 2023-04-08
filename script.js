const booksContainer = document.querySelector('.booksContainer');

let myLibrary = []


function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}


// loop through array
const loopThroughArray = (myLibrary) => {
    // clear existing child elements / prevents resubmitting the
    booksContainer.innerHTML = ''

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];

        // create a new book element
        const bookElement = document.createElement('div');
        bookElement.className = "book"
        bookElement.classList.add('div')

        // create title and author elements
        const titleElement = document.createElement('h2');
        titleElement.textContent = book.title
        titleElement.classList.add('h2')


        const authorElement = document.createElement('p');
        authorElement.textContent = 'by ' + book.author
        authorElement.classList.add('p')


        // pages
        const pagesElement = document.createElement('p');
        pagesElement.textContent = 'pages: ' + book.pages
        pagesElement.classList.add('p')


        // readStatus
        const readStatusElement = document.createElement('p');
        if (book.readStatus === 'yes') {
            readStatusElement.textContent = 'Read: Yes'
        } else {
            readStatusElement.textContent = 'Read: No'
        }
        readStatusElement.classList.add('p')



        // Add the title and author elements to the book element
        bookElement.appendChild(titleElement);
        bookElement.appendChild(authorElement);
        bookElement.appendChild(pagesElement);
        bookElement.appendChild(readStatusElement);


        // Add the book element to the books container element
        booksContainer.appendChild(bookElement);

    }
}


const newBookBtn = document.querySelector('.newBookBtn');
const newBookForm = document.querySelector('.newBookForm');

// add event listener to the new book button that show a new form
newBookBtn.addEventListener('click', () => {
    newBookForm.style.display = 'block'
});

// event listener for book form
newBookForm.addEventListener('submit', (e) => {
    // prevent default form submission behavior, wich would reload the page
    e.preventDefault();

    // get values of sbumitted input
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const readStatus = document.querySelector('input[name="readStatus"]:checked').value

    const newBook = {
        title: title,
        author: author,
        pages: pages,
        readStatus: readStatus
    }

    console.log('submit button clicked')
    // add new book to myLibrary array
    myLibrary.push(newBook)

    // reset form and hide
    e.target.reset()
    newBookForm.style.display = 'none';

    loopThroughArray(myLibrary)
});


// dummy data ##########
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const book2 = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 223, false);
const book3 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, false);
const book4 = new Book('title1', 'author1', 2, false);
// const book5 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
// const book6 = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 223, false);
// const book7 = new Book('To Kill a Mockingbird', 'Harper Lee', 281, false);
// const book8 = new Book('title1', 'author1', 2, false);

myLibrary.push(book1, book2, book3, book4);

loopThroughArray(myLibrary)