const container = document.getElementById('sketch-container');

function createGrid(size) {
  container.innerHTML = '';
  const squareSize = 960 / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener('mouseenter', () => {
      square.classList.add('hovered');
    });
    container.appendChild(square);
  }
}

function promptGridSize() {
  let size = prompt('Enter grid size (max 100):', 16);
  size = parseInt(size);
  if (isNaN(size) || size < 1 || size > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  createGrid(size);
}

document.addEventListener('DOMContentLoaded', () => {
  createGrid(16);
  document.getElementById('resize-btn').addEventListener('click', promptGridSize);
});
