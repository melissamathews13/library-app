const myLibrary = [];

// constructor function
function Book(title, author, pages, read) {
	(this.title = title),
		(this.author = author),
		(this.pages = pages),
		(this.read = read),
		(this.info = function () {
			return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
		});
}
// function to add books to the library/ myLibrary array
function addBookToLibrary() {
	let title = prompt('Enter the title of the book:');

    let newBook = new Book(title, author, pages, read? 'Read' : "Not Read");
    myLibrary.push(newBook)
}

