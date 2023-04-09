$(document).ready(function() {
    $('form').submit(function(e) {
      e.preventDefault();
      var title = $('#movieTitle').val();
      var rating = $('#movieRating').val();
  
      // Check if the rating input is a number
      if (!$.isNumeric(rating)) {
        // alert('Please enter a valid rating!');
        return;
      }
  
      $('table tbody').append('<tr><td>' + title + '</td><td>' + rating + '</td><td><button class="remove">Remove</button></td></tr>');
      $('#movieTitle').val('');
      $('#movieRating').val('');
    });
  
    $('table').on('click', '.remove', function() {
      $(this).closest('tr').remove();
    });
  });
  