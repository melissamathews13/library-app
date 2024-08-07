// DOM Elements
const formContainer = document.getElementById("form-container");
const addBookForm = document.getElementById("add-book-form");
const newBookButton = document.getElementById("new-book-button");
const tableBody = document.querySelector("#book-display tbody");

// Initialize empty array to store book objects
const myLibrary = [];

// Form pop-up
newBookButton.addEventListener("click", () => {
	formContainer.style.display = "block";
});

// Constructor function
function Book(title, author, pages, isbn, read) {
	(this.title = title),
		(this.author = author),
		(this.pages = pages),
		(this.isbn = isbn),
		(this.read = read);
}

// Add book to the library
function addBookToLibrary() {
	// Get the input elements
	const title = document.getElementById("title");
	const author = document.getElementById("author");
	const pages = document.getElementById("pages");
	const isbn = document.getElementById("isbn");
	const read = document.getElementById("read-status");

	// Get the values of the input elements
	const titleValue = title.value.trim();
	const authorValue = author.value.trim();
	const pagesValue = pages.value.trim();
	const isbnValue = isbn.value.trim();
	const readValue = read.checked ? "Yes" : "No";

	// Validate inputs
	if (!titleValue || !authorValue || !pagesValue || !isbnValue) {
		alert("Please fill in all fields.");
		return;
	}

	// Add the values to the array
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
	read.checked = false;
}

// Display library
function displayLibrary() {
	// Clear the table before displaying
	tableBody.innerHTML = "";

	// Check if the library is empty

	if (myLibrary.length === 0) {
		const tr = tableBody.insertRow();
		const cell = tr.insertCell();
		cell.textContent = "Your library is empty!";
		return;
	}

	// Iterate over each book in the library
	myLibrary.forEach( (book, index) => {
		const tr = tableBody.insertRow();

		// iterate over each property of the book
		Object.values(book).forEach((value) => {
			const cell = tr.insertCell();
			cell.textContent = value;
		});

		// Add delete button
		const deleteCell = tr.insertCell();
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.addEventListener("click", () => {deleteBook(index);
	});
	deleteCell.appendChild(deleteButton);
});
}

// Delete book from the library
function deleteBook(index) {
	myLibrary.splice(index, 1);
	displayLibrary(); // Display updated library
}


// form submission
addBookForm.addEventListener("submit", (e) => {
	e.preventDefault(); // Prevent default form submission
	formContainer.style.display = "none"; // Close the pop-up form after submission
	addBookToLibrary();
	displayLibrary(); // Display updated library
});
