$(document).ready(function() {
  const colors = ['#FF0000', '#33CC33', '#0000FF', '#FF69B4', '#800080', '#FFFF00']; // define the colors
  const discoBall = $('.disco-ball');

  // generate tiles dynamically
  for (let i = 0; i < 100; i++) { // generate 100 tiles
    const tile = $('<div>').addClass('tile');
    discoBall.append(tile);
  }

  // add hover effect
  $('.tile').hover(function() {
    const index = $(this).index() % colors.length; // get the color index based on the tile index
    $(this).css('background-color', colors[index]); // set the hover color
  }, function() {
    $(this).css('background-color', '#ccc'); // reset the background color on mouse out
  });
});
