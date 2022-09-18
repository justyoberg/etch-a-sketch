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
  smalldiv.style.margin = "0";
  smalldiv.style.padding = "0";
  canvas.appendChild(smalldiv);
}
