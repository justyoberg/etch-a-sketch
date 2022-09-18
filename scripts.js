const canvas = document.getElementById("canvas");
var grid_size = 1;


const smalldiv = document.createElement("div");
smalldiv.style.width = canvas.offsetWidth / grid_size + "px";
smalldiv.style.height = canvas.offsetHeight / grid_size + "px";
smalldiv.style.border = "thick solid #0000FF";


canvas.appendChild(smalldiv);