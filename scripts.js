// define button and form
const popUpForm = document.getElementById("popUpForm");
const addBookForm = document.getElementById("addBookForm");
let button = document.getElementById("addNewBook");


// form pop-up
button.addEventListener("click", function () {
	document.getElementById("popUpForm").style.display = "block";
});

//form submission
addBookForm.addEventListener("submit", function (e) {
	e.preventDefault(); // prevent the form submission from refreshing the page
	addBookToLibrary();
});

// constructor function
function Book(title, author, pages, isbn, read) {
	(this.title = title),
		(this.author = author),
		(this.pages = pages),
		(this.isbn = isbn),
		(this.read = read);
}
// function to add books to the library
function addBookToLibrary() {
	// initialize empty array
	const myLibrary = [];

	// get the input elements
	const title = document.getElementById("title");
	const author = document.getElementById("author");
	const pages = document.getElementById("pages");
	const isbn = document.getElementById("isbn");
	const read = document.getElementById("read-status");

	// get the values of the input elements
	const titleValue = title.value;
	const authorValue = author.value;
	const pagesValue = pages.value;
	const isbnValue = isbn.value;
	const readValue = read.checked;

	// add the values to the array
	myLibrary.push(
		new Book(titleValue, authorValue, pagesValue, isbnValue, readValue)
	);

	    // Log the book's details to the console
		console.log(`Title: ${titleValue}`);
		console.log(`Author: ${authorValue}`);
		console.log(`Pages: ${pagesValue}`);
		console.log(`ISBN: ${isbnValue}`);
		console.log(`Read: ${readValue}`);
	

	// clear the input fields
	// title.value = "";
	// author.value = "";
	// pages.value = "";
	// isbn.value = "";
	// read.value = false;
}

