
$(document).ready(function() {
    // get references to the DOM elements
const form = $('form');
const movieTitleInput = $('#movieTitle');
const movieRatingInput = $('#movieRating');
const tableBody = $('tbody');
const sortTitleButton = $('#sortTitle');
const sortRatingButton = $('#sortRating');

// event listener for form submission
form.on('submit', (event) => {
event.preventDefault(); // prevent default form behavior

// get the values from the form inputs
const movieTitle = movieTitleInput.val();
const movieRating = movieRatingInput.val();

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
const newRow = $('<tr></tr>');
const titleCell = $('<td></td>');
const ratingCell = $('<td></td>');
const removeCell = $('<td></td>');
const removeButton = $('<button></button>');

// set the text content for the cells
titleCell.text(movieTitle);
ratingCell.text(movieRating);
removeButton.text('Remove');

// add a click event listener to the remove button
removeButton.on('click', () => {
newRow.remove();
});

// append the cells to the row and the row to the table body
removeCell.append(removeButton);
newRow.append(titleCell);
newRow.append(ratingCell);
newRow.append(removeCell);
tableBody.append(newRow);

// clear the form inputs
movieTitleInput.val('');
movieRatingInput.val('');
});

// event listener for sorting by title
sortTitleButton.on('click', () => {
const rows = tableBody.find('tr').toArray();
const sortedRows = rows.sort((a, b) => {
const aTitle = $(a).find('td:first-child').text();
const bTitle = $(b).find('td:first-child').text();
return aTitle > bTitle ? 1 : -1;
});
tableBody.html('');
tableBody.append(sortedRows);
});

// event listener for sorting by rating
sortRatingButton.on('click', () => {
const rows = tableBody.find('tr').toArray();
const sortedRows = rows.sort((a, b) => {
const aRating = parseFloat($(a).find('td:nth-child(2)').text());
const bRating = parseFloat($(b).find('td:nth-child(2)').text());
return aRating > bRating ? 1 : -1;
});
tableBody.html('');
tableBody.append(sortedRows);
});
  });
  
