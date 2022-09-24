const canvas = document.getElementById("canvas");
const submit = document.querySelector(".submit");
const currentSize = document.querySelector(".size");
const penButton = document.querySelector(".pen");
const eraserButton = document.querySelector(".eraser");

var gridSize = 32;
var mouseDown = false;
var eraser = false;
var pen = true;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

penButton.addEventListener("click", function() {
  pen = true;
  eraser = false;
  penButton.style.backgroundColor = "black";
  penButton.style.color = "beige";
  eraserButton.style.backgroundColor = "beige";
  eraserButton.style.color = "black";
});

eraserButton.addEventListener("click", function() {
  eraser = true;
  pen = false;
  eraserButton.style.backgroundColor = "black";
  eraserButton.style.color = "beige";
  penButton.style.backgroundColor = "beige";
  penButton.style.color = "black";
});

submit.addEventListener("click", function() {
  gridSize = document.querySelector(".grid-size").value;
  if (gridSize > 32) return;
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
    smalldiv.addEventListener('mouseover', setColor);
    smalldiv.addEventListener('mousedown', setColor);
    smalldiv.ondragstart = () => {return false};
    canvas.appendChild(smalldiv);
  }
}

function setColor(square) {
  if (square.type === 'mouseover' && !mouseDown) return;
  if (pen === true && eraser === false) {
    square.target.classList.remove("grid-square-beige");
    square.target.classList.add("grid-square-dark");
  } else if (eraser === true && pen === false) {
    square.target.classList.remove("grid-square-dark");
    square.target.classList.add("grid-square-beige");
  }
}

createGrid();
