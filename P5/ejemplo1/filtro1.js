
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
};

console.log("Fin");
