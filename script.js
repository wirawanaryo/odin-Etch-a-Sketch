let canvasSize = prompt("How big is the canvas?");
const canvas = document.querySelector(".canvas")

function createPixel(canvasSize){
  pixelSize = 700/canvasSize
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.height = `${pixelSize}px`;
  pixel.style.flexBasis = `${pixelSize}px`;
  return pixel
}


function appendPixels(canvasSize){ 
  for(let i =0; i < canvasSize*canvasSize; i++){ 
    const pixel = createPixel(canvasSize);
    canvas.appendChild(pixel);
  }  
}
appendPixels(canvasSize)