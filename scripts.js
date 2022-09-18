const canvas = document.getElementById("canvas");
const submit = document.querySelector(".submit");
var gridSize = 16;

submit.addEventListener("click", function() {
  gridSize = document.querySelector(".grid-size").value;
});

for (let i = 0; i < gridSize * gridSize; i++){
  const smalldiv = document.createElement("div");
  smalldiv.style.width = (canvas.offsetWidth / gridSize) + "px";
  smalldiv.style.height = (canvas.offsetHeight / gridSize) + "px";
  smalldiv.classList.add("grid-square");
  canvas.appendChild(smalldiv);
}

const gridSquares = document.querySelectorAll(".grid-square");

function events(square) {
  square.addEventListener("mousedown", function() {
    square.style.backgroundColor = "black";
  });
  square.addEventListener("mousemove", function() {
    square.style.backgroundColor = "black";
  });
}
gridSquares.forEach(square => events(square));