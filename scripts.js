const canvas = document.getElementById("canvas");
const submit = document.querySelector(".submit");
const currentSize = document.querySelector(".size");

var gridSize = 16;

submit.addEventListener("click", function() {
  gridSize = document.querySelector(".grid-size").value;
  if (gridSize > 16) return;
  clearGrid();
  createGrid();
  currentSize.textContent = `Current size: ${gridSize} x ${gridSize}`
});

function clearGrid() {
  const squares = canvas.querySelectorAll(".grid-square");
  squares.forEach((square) => square.parentNode.removeChild(square));
}

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++){
    const smalldiv = document.createElement("div");
    smalldiv.style.width = (canvas.offsetWidth / gridSize) + "px";
    smalldiv.style.height = (canvas.offsetHeight / gridSize) + "px";
    smalldiv.classList.add("grid-square");
    canvas.appendChild(smalldiv);
  }
  const gridSquares = document.querySelectorAll(".grid-square");
  gridSquares.forEach(square => events(square));
}

function events(square) {
  square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "black";
  });
}

createGrid();
