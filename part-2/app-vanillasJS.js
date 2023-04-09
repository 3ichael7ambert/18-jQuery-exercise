// get references to the DOM elements
const form = document.querySelector('form');
const movieTitleInput = document.querySelector('#movieTitle');
const movieRatingInput = document.querySelector('#movieRating');
const tableBody = document.querySelector('tbody');

// event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form behavior

  // get the values from the form inputs
  const movieTitle = movieTitleInput.value;
  const movieRating = movieRatingInput.value;

    // Check if the rating input is a number
    if (isNaN(movieRating)) {
      // alert('Please enter a valid rating!');
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
