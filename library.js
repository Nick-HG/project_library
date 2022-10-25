//Open & close form field via 'add book' button
function openForm() {
  const myForm = document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}

//Refactored to class based inheritance
class Book {
  name;
  author;
  pages;

  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

let myLibrary = [];

function addBook() {
  const bookTitle = document.querySelector('input[name="title"]').value;
  const bookAuthor = document.querySelector('input[name="author"]').value;
  const bookPages = document.querySelector('input[name="pages"]').value;
  
  const booksContainer = document.querySelector('.books-container')
  const createCard = document.createElement('div');
  const cardTitle = document.createElement('p');
  const cardAuthor = document.createElement('p');
  const cardPages = document.createElement('p');
  const deleteBtn = document.createElement('button');

  myLibrary.push([new Book(bookTitle, bookAuthor, bookPages), deleteBtn]);

  deleteBtn.addEventListener('click', event => {
    event.target.parentNode.remove();
  });

  createCard.classList.add('card');
  createCard.setAttribute('id', 'id_num');
  deleteBtn.classList.add('delete-button');

  cardTitle.textContent = bookTitle;
  cardAuthor.textContent = bookAuthor;
  cardPages.textContent = bookPages + ' pages';
  deleteBtn.textContent = 'Remove';

  booksContainer.appendChild(createCard);
  createCard.appendChild(cardTitle);
  createCard.appendChild(cardAuthor);
  createCard.appendChild(cardPages);
  createCard.appendChild(deleteBtn);

  document.getElementById('form-container').reset();
  hide();
  return
}

function hide() {
  let form = document.querySelector('#myForm');
  if (form.style.display === 'none') {
    form.style.cssText
  } else {
    form.style.display = 'none';
  }
}

const addBookBtn = document.querySelector('.form-btn');
addBookBtn.onclick = addBook;




//FUNCTIONALITY TO ADD
//make form fields compulsory otherwise card shows with pages and remove only
//check console for error with input[type="name"] etc
//update total-read in book log for each book added
//create genre field and add genre list to side of page so you can filter
