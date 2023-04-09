// get references to the DOM elements
const form = document.querySelector('form');
const movieTitleInput = document.querySelector('#movieTitle');
const movieRatingInput = document.querySelector('#movieRating');
const tableBody = document.querySelector('tbody');
const sortTitleButton = document.querySelector('#sortTitle');
const sortRatingButton = document.querySelector('#sortRating');

// event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form behavior

  // get the values from the form inputs
  const movieTitle = movieTitleInput.value;
  const movieRating = movieRatingInput.value;

  // Check if the rating input is a number between 0 and 10
  if (isNaN(movieRating) || movieRating < 0 || movieRating > 10) {
    alert('Please enter a valid rating between 0 and 10!');
    return;
  }

  // Check if the title input has at least 2 characters
  if (movieTitle.length < 2) {
    alert('Please enter a title with at least 2 characters!');
    return;
  }

  // create a new table row and cells
  const newRow = document.createElement('tr');
  const titleCell = document.createElement('td');
  const ratingCell = document.createElement('td');
  const removeCell = document.createElement('td');
  const removeButton = document.createElement('button');

  // set the text content for the cells
  titleCell.textContent = movieTitle;
  ratingCell.textContent = movieRating;
  removeButton.textContent = 'Remove';

  // add a click event listener to the remove button
  removeButton.addEventListener('click', () => {
    newRow.remove();
  });

  // append the cells to the row and the row to the table body
  removeCell.appendChild(removeButton);
  newRow.appendChild(titleCell);
  newRow.appendChild(ratingCell);
  newRow.appendChild(removeCell);
  tableBody.appendChild(newRow);

  // clear the form inputs
  movieTitleInput.value = '';
  movieRatingInput.value = '';
});

// event listener for sorting by title
sortTitleButton.addEventListener('click', () => {
  const rows = Array.from(tableBody.querySelectorAll('tr'));
  const sortedRows = rows.sort((a, b) => {
    const aTitle = a.querySelector('td:first-child').textContent;
    const bTitle = b.querySelector('td:first-child').textContent;
    return aTitle > bTitle ? 1 : -1;
  });
  tableBody.innerHTML = '';
  tableBody.append(...sortedRows);
});

// event listener for sorting by rating
sortRatingButton.addEventListener('click', () => {
  const rows = Array.from(tableBody.querySelectorAll('tr'));
  const sortedRows = rows.sort((a, b) => {
    const aRating = parseFloat(a.querySelector('td:nth-child(2)').textContent);
    const bRating = parseFloat(b.querySelector('td:nth-child(2)').textContent);
    return aRating > bRating ? 1 : -1;
  });
  tableBody.innerHTML = '';
  tableBody.append(...sortedRows);
});
