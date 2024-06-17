// initialize empty array to store book objects
const myLibrary = [];

const popUpForm = document.getElementById("popUpForm");
const addBookForm = document.getElementById("addBookForm");
let newBookBtn = document.getElementById("newBook");

// form pop-up
newBookBtn.addEventListener("click", function () {
	document.getElementById("popUpForm").style.display = "block";
});

// form submission
//form submission
addBookForm.addEventListener("submit", function (e) {
	e.preventDefault(); // prevent default form submission
	popUpForm.style.display = "none"; // close the pop-up form after submission
	displayLibrary(); // display updated library
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
	const readValue = read.checked ? "Yes" : "No";

	// add the values to the array
	myLibrary.push(
		new Book(titleValue, authorValue, pagesValue, isbnValue, readValue)
	);

	// Log the book's details to the console
	console.log(`Title: ${titleValue}`);
	console.log(`Author: ${authorValue}`);
	console.log(`Pages: ${pagesValue}`);
	console.log(`ISBN: ${isbnValue}`);
	console.log(`Read: ${read.checked}`);

	console.log(myLibrary);

	// clear the input fields
	title.value = "";
	author.value = "";
	pages.value = "";
	isbn.value = "";
	read.checked =  false;
}

function displayLibrary() {
	let table = document.getElementById("book-display");

	// clear existing table rows
	while (table.secondChild) {
		table.removeChild(table.secondChild);
	}

	// check if the library is empty
	if (myLibrary.length === 0) {
		let tr = table.insertRow();
		let cell = tr.insertCell();
		cell.textContent = "Your library is empty!";
	}

	// iterate over each book in the library
	myLibrary.forEach(function (book) {
		let tr = table.insertRow();

		// iterate over each property of the book
		Object.values(book).forEach(function (value) {
			let cell = tr.insertCell();
			cell.textContent = value;
		});
	});
}

