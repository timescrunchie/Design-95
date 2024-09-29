const colors = ['#FF0000', '#33CC33', '#0000FF', '#FF69B4', '#800080', '#FFFF00']; // define the colors

const squareContainer = document.querySelector('.square-container');

// generate squares dynamically
for (let i = 0; i < 14 * 5; i++) { // generate 15 x 7 = 105 squares
  const square = document.createElement('div');
  square.className = 'square';
  squareContainer.appendChild(square);
}

// add hover effect
document.querySelectorAll('.square').forEach((square, index) => {
  square.addEventListener('mouseover', () => {
    const colorIndex = index % colors.length; // get the color index based on the square index
    square.style.backgroundColor = colors[colorIndex]; // set the hover color
  });

  square.addEventListener('mouseout', () => {
    square.style.backgroundColor = '#ccc'; // reset the background color on mouse out
  });
});
