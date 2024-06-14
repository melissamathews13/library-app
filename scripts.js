// constructor function
function Book(title, author, pages, isbn, read) {
	(this.title = title),
		(this.author = author),
		(this.pages = pages),
		(this.isbn = isbn),
		(this.read = read),
		(this.info = function () {
			return `${this.title} by ${this.author},${this.isbn} ${this.pages} 
			pages, ${this.read}.`;
		});
}
// function to add books to the library/ myLibrary array
function addBookToLibrary() {
	// initialize empty array
	const myLibrary = [];

	// get the input elements
	const title = document.getElementById("title");
	const author = document.getElementById("author");
	const pages = document.getElementById("pages");
	const isbn = document.getElementById("isbn");
	const read = document.getElementById("read");

	// get the values of the input elements
	const titleValue = title.value;
	const authorValue = author.value;
	const pagesValue = pages.value;
	const isbnValue = isbn.value;
	const readValue = read.value;

	// add the values to the array
	myLibrary.push(
		new Book(titleValue, authorValue, pagesValue, isbnValue, readValue)
	);

	console.log(myLibrary);

	// clear the input fields
	title.value = "";
	author.value = "";
	pages.value = "";
	isbn.value = "";
	read.value = "";
}

const twilight = new Book("Twilight", "J.K.Rowling", 300, 1234567890, "Yes");

console.log(twilight);
console.log(twilight.info());

// // define button and form
const popUpForm = document.getElementById("popUpForm");
let button = document.getElementById("addNewBook");

// form pop-up
button.addEventListener("click", function () {
	document.getElementById("popUpForm").style.display = "block";
});
