let canvasSize = prompt("How big is the canvas? (1-100)");
canvasSize = Number(canvasSize);
while (canvasSize > 100 || canvasSize < 0 || typeof canvasSize !== 'number' || canvasSize % 1 !== 0) {
   canvasSize = prompt("Please put a number between 1-100!");
   canvasSize = Number(canvasSize);
};

const canvas = document.querySelector(".canvas")

const eraser = document.getElementById("eraser");
let eraserStatus = false; 
eraser.addEventListener("click", function(){
  if(eraserStatus === false){
     eraser.textContent = "Paint Mode";
     eraserStatus = true
  } else{
     eraser.textContent = "Eraser Mode"
     eraserStatus = false;
  }
});

const changeCanvas = document.getElementById("changeCanvas");
changeCanvas.addEventListener("click", function(){
  location.reload();
});

function createPixel(canvasSize){
  pixelSize = 700/canvasSize
  
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.height = `${pixelSize}px`;
  pixel.style.flexBasis = `${pixelSize}px`;

  pixel.addEventListener("mouseover", function() {
    if (eraserStatus) {
      pixel.style.backgroundColor = "white";
    } else{
      pixel.style.backgroundColor = "black";
    }      
  });
  
  return pixel
};

function appendPixels(canvasSize){ 
  for(let i =0; i < canvasSize*canvasSize; i++){ 
    const pixel = createPixel(canvasSize);    
    canvas.appendChild(pixel);
  } ; 
};

appendPixels(canvasSize)

const reset = document.getElementById("reset");
reset.addEventListener("click", function(){  
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => {
    pixel.style.backgroundColor = "white";
  });
});