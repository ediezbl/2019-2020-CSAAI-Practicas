
console.log("Ejecutando JS...");

// Obtener elementos del DOOM
const canvas = document.getElementById("canvas");
const img = document.getElementById("imagesrc");
const ctx = canvas.getContext("2d");

// Funcion de retrollamada imagen cargada
// Solo se puede llamar a la imagen cuando este
// totalmente cargada
img.onload = function () {
  canvas.width = img.width;
  canvas.height = img.height;
  // Colocar la imagen original en el canvas
  ctx.drawImage(img, 0, 0);
  // Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // Obtener array con todos los pixeles
  let data = imgData = imgData.data
  // Obtener el numero total de elementos en el array
  console.log("Tamaño de data: " + data.length);
  // Numero total de pixeles es altura por anchura
  npixels = canvas.width * canvas.height;
  console.log("Anchura (en pixeles): " + canvas.width);
  console.log("Altura (en pixeles): " + canvas.height);
  console.log("Pixeles totales: " + npixels);
};

console.log("Fin");
